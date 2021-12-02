import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {BaseComponentComponent} from "./base-component/base-component.component";
import {GuidebooksComponent} from "./base-component/guidebooks/guidebooks.component";
import {AuthGuard} from "./auth/auth.guard";


const routes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'base-component', component: BaseComponentComponent,canActivate: [AuthGuard] , children: [
      { path: 'guidebooks', component: GuidebooksComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
