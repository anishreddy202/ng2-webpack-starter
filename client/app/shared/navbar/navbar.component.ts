import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'navbar',
	template: require('./navbar.component.html')
})

export class NavBarComponent {
	
	constructor() {

	}
	toggle() {
		console.log('clicked');
	}
}