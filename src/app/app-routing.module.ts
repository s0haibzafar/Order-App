import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderGraphComponent } from './order-graph/order-graph.component';


const routes: Routes = [
  {
    path :'',
    component:HomeComponent
  },
  {
    path :'order',
    component:OrderFormComponent
  },
  {
    path :'graph',
    component:OrderGraphComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
