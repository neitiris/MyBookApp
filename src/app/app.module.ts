import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ApproutingModule} from './approuter.module';
import { MyBookComponent } from './page';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { BooksComponent, RatingComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    MyBookComponent,
    BooksComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ApproutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [
    HttpClientModule,
    HttpClient,
    BooksComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
