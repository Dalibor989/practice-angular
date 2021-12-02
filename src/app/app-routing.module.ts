import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuidebooksComponent} from "./base-component/guidebooks/guidebooks.component";
import {BaseComponentComponent} from "./base-component/base-component.component";
import {AuthComponent} from "./base-component/auth/auth.component";

const routes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'base-component', component: BaseComponentComponent, children: [
      { path: 'guidebooks', component: GuidebooksComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
