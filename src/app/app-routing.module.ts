import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AddServiceComponent } from './components/add-service/add-service.component';

const routes: Routes = [
  { path: '', redirectTo: 'services', pathMatch: 'full' },
  { path: 'services', component: ServicesListComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: 'add', component: AddServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
