import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from './courses.service';
import {AuthorsComponent} from './authors/authors.component';
import {AuthorsService} from './authors/authors.service';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import {InputComponentComponent} from './input-component/input-component.component';
import {FormatInputPipe} from "./formatInput.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FormatInputPipe,
    InputComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
