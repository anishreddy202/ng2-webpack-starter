import { Component, OnInit } 	  from '@angular/core';
import { Router } 				      from '@angular/router';

console.log('Register bundle loaded');

@Component({
	selector:'register',
	template:require('./register.component.html')
})
export class RegisterComponent implements OnInit {
	public status: any = {}
	public user: any = {};

	constructor(private _router: Router) {}

	register() {

	}

	login() {

	}

	ngOnInit(){
		console.log('Register Component initialized');
	}
}
