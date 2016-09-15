import { NgModule, ModuleWithProviders}   from '@angular/core';
import { Route, RouterModule }            from '@angular/router';
import { LandingComponent }               from './landing/landing.component';

const routes: Route[] = [
  { path: '', component: LandingComponent }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],

  declarations: [
    LandingComponent
  ]
})

export class HomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule
    };
  }
}