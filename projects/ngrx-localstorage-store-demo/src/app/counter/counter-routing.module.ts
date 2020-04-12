import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterIndexComponent } from './components/counter-index/counter-index.component';

const routes: Routes = [
  {
    path: '',
    component: CounterIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterRoutingModule {}
