import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CanActivateGuard} from "./services/guard.service";
// Components
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {CalendarComponent} from "./pages/calendar/calendar.component";

const routes: Routes = [
  // Root
  {
    component: DashboardComponent,
    path: ''
  },
  {
    canActivate: [CanActivateGuard],
    component: CalendarComponent,
    path: 'calendar'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
