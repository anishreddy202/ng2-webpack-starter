// Angular2 Module
import { NgModule, ModuleWithProviders}   from '@angular/core';
import { Route, RouterModule }      from '@angular/router';
import { BrowserModule } 					  from '@angular/platform-browser';
import { FormsModule }      				from '@angular/forms';

// Components and pipes
import { LoginComponent } 		      from './login/login.component';
import { RegisterComponent } 		    from './register/register.component';


console.log(' Manage bundle loaded asynchronously');
// Setup routing
export const routes: Route[] = [
  { path: 'login',  component: LoginComponent  },
  { path: 'register', component: RegisterComponent },
 
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule
  ],
  providers: [
  
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ]
})

export class ManageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ManageModule
    };
  }
}
