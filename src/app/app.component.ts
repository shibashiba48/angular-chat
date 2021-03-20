import { Component } from '@angular/core';

import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '山田太郎', message: 'おつです！'},
  { name: '山田太郎', message: 'お腹すきましたね！'},
  { name: '木場嵐土', message: 'おつです！'},
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
}
