import { Component, Input, OnInit } from '@angular/core';

import quizz from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  question: any;
  questionSelected: any;

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex = 0;

  finished: boolean = false;

  imgHero: string = '';


  constructor() { }

  ngOnInit(): void {
    if (quizz.questions) {
      this.finished = false;

      this.question = quizz.questions;
      this.questionSelected = this.question[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.question.length;
    }
  }

  playerChoose(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  nextStep() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.question[this.questionIndex];
    } else {
      const finalAnswer: string = this.checkResult(this.answers);
      this.finished = true;
      this.answerSelected = quizz.results[finalAnswer as keyof typeof quizz.results];

      if (finalAnswer === 'A') {
        this.imgHero = '/assets/img/villain.jpg';
      } else {
        this.imgHero = '/assets/img/heroes.jpg';
      }
    }
  }

  checkResult(awswers: string[]) {
    const result = awswers.reduce((previous, current, index, arr) => {
      if (
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length
      ) {
        return previous;

      } else {
        return current;
      }
    });

    return result;
  }

}
