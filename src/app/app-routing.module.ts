import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'events', component: EventsComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }