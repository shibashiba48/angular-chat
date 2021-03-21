import { Component } from '@angular/core';

import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, '木場嵐土');
const ANOTHER_USER: User = new User(2, 'パワプロ');

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'おつです！'),
  new Comment(ANOTHER_USER, 'お腹すきましたね！'),
  new Comment(CURRENT_USER, 'おつです！'),
  new Comment(CURRENT_USER, 'どこ行きます？')
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
  currentUser = CURRENT_USER;
}
