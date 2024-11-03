// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'container', component: ContainerComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: '/container', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

