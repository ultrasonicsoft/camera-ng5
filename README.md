# Fork by Pooshon Banerjee from camera-demo-ng5 by Balram Chavan

## Changes in the Fork

I was using Angular 9 on my laptop when I needed to use camera for one of my projects, so I cloned this repo and tried to work on it. Since the original package was using angular-cli 1.x.x, it didn't work on my laptop. So I decided to upgrade to Angular 9. This is to help all those who are on latest Angular version. This also uses Bootstrap 4, so you will find a few changes in html template too, for example 'label' is not there anymore, you have to use badge.

A major addition in this fork is the ability to record a video and get it as a file, so it can be uploaded to a server.

For that, we'd need "MediaRecorder" object and for that we'd need a @types package [@types/dom-mediacapture-record": "^1.0.4"] to be added to dev dependencies. It is there in package.json already so nothing for you to do. But, for this package to work, you'd need to add the following line at the beginning of each .ts file in your project, wherever you intend to use "MediaRecorder". For example, in our case, you will find this line on top of app.component.ts.

This is the line of code:

/// <reference types="@types/dom-mediacapture-record" />

Another change is that this fork uses angular.json in lieu of angular-cli.json.

I hope by adding this fork to git I am helping people and not making things difficult for them, still if I end up making things bad for you, I apologize.

PB


# Original package by Balram Chavan
# Working with Camera using Angular

# Live demo

http://camera-demo-ng5.surge.sh/


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
