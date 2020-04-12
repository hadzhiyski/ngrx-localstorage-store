import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormIndexComponent } from './components/contact-form-index/contact-form-index.component';


const routes: Routes = [
  {
    path: '',
    component: ContactFormIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFormRoutingModule { }
