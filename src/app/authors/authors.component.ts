import {Component, OnInit} from '@angular/core';
import {AuthorsService} from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  imageUrl = '';
  colSpan = 2;
  isActive= true;

  // Two-way binding
  email = "me@example.com";

  constructor(authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
  }

  ngOnInit() {
  }

  // Event binding
  onSave($event) {
    // Event bubbling
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }

  onDivClick() {
    console.log('Div was clicked');
  }

  // Template variable #1
  // onKeyUp($event) {
  //   console.log($event.target.value);
  // }

  // Template variable #2
  onKeyUp() {
    console.log(this.email);
  }
}
