import { Component, Input, OnInit } from '@angular/core';

import quizz from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz-logo',
  templateUrl: './quizz-logo.component.html',
  styleUrls: ['./quizz-logo.component.css']
})

export class QuizzLogoComponent implements OnInit {

  title: string = '';
  @Input() imgLogo: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = quizz.title;
  }

}
