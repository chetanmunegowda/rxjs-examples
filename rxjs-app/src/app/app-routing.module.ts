import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FileUploadComponent} from './pages/file-upload/file-upload.component';
import {RxjsMapComponent} from './pages/rxjs-map/rxjs-map.component';
import {RxjsFilterComponent} from './pages/rxjs-filter/rxjs-filter.component';
import {RxjsCombineLatestComponent} from './pages/rxjs-combine-latest/rxjs-combine-latest.component';
import {RxjsConcatMapComponent} from './pages/rxjs-concat-map/rxjs-concat-map.component';
import {RxjsFlatMapComponent} from './pages/rxjs-flat-map/rxjs-flat-map.component';
import {RxjsSwitchMapComponent} from './pages/rxjs-switch-map/rxjs-switch-map.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'rxjs-map',
    component: RxjsMapComponent
  },
  {
    path: 'rxjs-filter',
    component: RxjsFilterComponent
  },
  {
    path: 'rxjs-merge-map',
    component: RxjsFlatMapComponent
  },
  {
    path: 'rxjs-concat-map',
    component: RxjsConcatMapComponent
  },
  {
    path: 'rxjs-switch-map',
    component: RxjsSwitchMapComponent
  },
  {
    path: 'rxjs-combine-latest',
    component: RxjsCombineLatestComponent
  },
  {
    path: 'file-upload',
    component: FileUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
