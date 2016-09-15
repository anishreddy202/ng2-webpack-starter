import { NgModule }         from '@angular/core';
import { HashLocationStrategy,PathLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule }    from '@angular/platform-browser';
import { RouterModule }     from '@angular/router';
import { AppComponent }     from './app.component';
import { HomeModule }       from './home/index';
import { ManageModule }     from './manage/index';
import { NavBarComponent }  from './shared/navbar/navbar.component';


@NgModule({
	imports:[
	  BrowserModule,
	  RouterModule.forRoot([]),
	  HomeModule,
	  ManageModule
	],
	declarations:[
	  AppComponent,
	  NavBarComponent
	],
	providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	bootstrap:[ AppComponent ]
})

export class AppModule {} 