import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './pages/index/index-page.component';

const routes: Routes = [{
  path: '',
  component: IndexPageComponent,
},
{
  path: 'winkelwagen',
  component: IndexPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
