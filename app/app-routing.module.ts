import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  { path : 'connect', component: ConnectComponent},
  { path : 'query', component: QueryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
