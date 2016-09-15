import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { NavBarComponent }  from './shared/navbar/navbar.component';


@NgModule({
	imports:[
	  BrowserModule
	],
	declarations:[
	  AppComponent,
	  NavBarComponent
	],
	providers:[],
	bootstrap:[ AppComponent ]
})

export class AppModule {} 