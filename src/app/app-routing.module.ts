import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleDisplayRoutes } from './example-display/example-display-routing.module';

@NgModule({
  imports: [RouterModule.forRoot(ExampleDisplayRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
