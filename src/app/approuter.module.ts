import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as pages from './page/';

const appRoutes: Routes = [
  { path: '', component: pages.MyBookComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ApproutingModule {

}
