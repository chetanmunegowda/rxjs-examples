import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { FilePickerComponent } from './components/file-picker/file-picker.component';
import { FileComponent } from './components/file/file.component';
import { RxjsMapComponent } from './pages/rxjs-map/rxjs-map.component';
import { RxjsFilterComponent } from './pages/rxjs-filter/rxjs-filter.component';
import { RxjsCombineLatestComponent } from './pages/rxjs-combine-latest/rxjs-combine-latest.component';
import { RxjsFlatMapComponent } from './pages/rxjs-flat-map/rxjs-flat-map.component';
import { RxjsConcatMapComponent } from './pages/rxjs-concat-map/rxjs-concat-map.component';
import { RxjsSwitchMapComponent } from './pages/rxjs-switch-map/rxjs-switch-map.component';
import { TypescriptComponent } from './components/typescript/typescript.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileUploadComponent,
    FilePickerComponent,
    FileComponent,
    RxjsMapComponent,
    RxjsFilterComponent,
    RxjsCombineLatestComponent,
    RxjsFlatMapComponent,
    RxjsConcatMapComponent,
    RxjsSwitchMapComponent,
    TypescriptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HighlightJsModule
  ],
  providers: [
    HighlightJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
