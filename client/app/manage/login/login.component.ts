import { Component, OnInit } 		from '@angular/core';
import { Router } 					from '@angular/router';

console.log('Login bundle loaded');

@Component({
	selector:'login',
	template: require('./login.component.html')
})

export class LoginComponent implements OnInit {

	public status: any = {}
	public user: any = {};
	
	constructor(private _router: Router) {}

	login() {

	}

	ngOnInit(){
		console.log('Login Component initialized');
	}
}
