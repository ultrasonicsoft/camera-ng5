/// <reference types="@types/dom-mediacapture-record" />
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('videoElement') videoElement: ElementRef;
  @ViewChild('recordedVideo') recordedVideo: ElementRef;
  video: any;
  rVideo: any;
  mediaRecorder: any;
  isPlaying = false;
  isCameraOn = false;
  isRecording = false;
  chunks:any = [];
  displayControls = true;
  recordingDone = false;
  file: File;
  blob:any;
  ngOnInit() {
    // this.video = this.videoElement.nativeElement;
  }
  ngAfterViewInit() {
    this.video = this.videoElement.nativeElement;
  }

  start() {
    this.initCamera({ video: true, audio: false });
    this.isCameraOn = true;
  }

  pause() {
    this.video.pause();
  }

  toggleControls() {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume() {
    this.video.play();
  }

  sound() {
    this.initCamera({ video: true, audio: true });
  }
  startRec(){
    this.mediaRecorder.start();
    console.log("state -> ", this.mediaRecorder.state);
    this.isRecording = true;
  }
  stopRec(){
    this.recordingDone = true;
    this.rVideo = this.recordedVideo.nativeElement;
    console.log("state -> ", this.mediaRecorder.state);
    this.mediaRecorder.stop();
    this.isRecording = false;
  }
  blobToFile(theBlob): File{
      //A Blob() is almost a File() - it's just missing the two properties below which we will add
      let d = new Date();
      theBlob.lastModifiedDate = d;
      theBlob.name = "recording_"+d.getTime()+".mp4";
      return new File([theBlob], theBlob.name, { type: theBlob.type });
  }

  initCamera(config:any) {
    var browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      // this.video.src = window.URL.createObjectURL(stream);
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.ondataavailable = (ev) => {
          this.chunks.push(ev.data);
      }
      this.mediaRecorder.onstop = (ev)=>{
          this.blob = new Blob(this.chunks, { 'type' : 'video/mp4' });
          this.chunks = [];
          let videoURL = window.URL.createObjectURL(this.blob);
          this.rVideo.src = videoURL;
          this.file = this.blobToFile(this.blob);
          console.log("file before upload -> ", this.file);    // If you want to upload the recorded video to a server
      }
      console.log("state -> ", this.mediaRecorder.state);
      this.video.srcObject = stream;
      this.video.play();
    });
  }
}
