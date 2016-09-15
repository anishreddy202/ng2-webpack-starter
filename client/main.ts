import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode }         from '@angular/core';
import { AppModule }              from './app/app.module';


declare var app: any;
console.log(app.environment);
if (app.environment === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(function(){
	console.log('BootStrap Success');
	console.log('Page load Time: ' + ((new Date).getTime() - window.performance.timing.connectEnd) + 'ms');
}).catch(function(error){
	console.log(error);
})