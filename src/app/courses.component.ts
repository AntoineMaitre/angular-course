import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
    {{ text | summary:10 }}
    <div (click)="onFavorite()" class="glyphicon glyphicon-star"
         [ngClass]="{ 'glyphicon-star-empty': !isFavorite() }">
    </div>
  `
  // template:
  //   <h2>{{ title }}</h2>
  //   <ul>
  //     <li *ngFor="let course of courses">
  //       {{ course }}
  //     </li>
  //   </ul>
  // `
})

export class CoursesComponent {
  title = 'List of courses';
  courses;
  text = `Lorem ipsum is simply dummy text of the printing typescript`;
  public isFavoriteElem = false;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onFavorite() {
    this.isFavoriteElem = !this.isFavoriteElem;
  }

  isFavorite(): boolean {
    return this.isFavoriteElem;
  }
}
