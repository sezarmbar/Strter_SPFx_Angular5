import {Component, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UIRouterModule} from "@uirouter/angular";

@Component({selector: 'my-spfx-app', template: `
  <a uiSref="hello" uiSrefActive="active">Hello</a>
  <a uiSref="about" uiSrefActive="active">About</a>
  
  <ui-view></ui-view>
  `})
export class AppComponent {}

@Component({template: '<h3>Hello world!</h3>'})
export class Hello {}

@Component({template: '<h3>Its the UI-Router hello world app!</h3>'})
export class About {}

export const helloState = {
  name: 'hello',
  url: '/hello',
  component: Hello
};
export const aboutState = {
  name: 'about',
  url: '/about',
  component: About
};
export const APP_STATES = [helloState, aboutState];