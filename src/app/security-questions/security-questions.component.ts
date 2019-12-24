import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from "@angular/router"
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';

interface Questions {
  question: String,
  options: string[],
  answer: string,
  response: {
    correct: string,
    incorrect: string
  }
}

const questions:Questions[] = [
  {question: "Who's the best BF?", options: ["Daniel", "Someone else"], answer: "Daniel", response: {correct: "Who's a clever girl!", incorrect: "Try again"}},
  {question: "Who is more likely to tidy? ", options: ["Daniel", "Charlotte"], answer: "Charlotte", response: {correct: "Who's a clever girl!", incorrect: "Try again"}}
]

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: { 
        fromOpacity: 0, 
        toOpacity: 100 
      }
    }))]),
    trigger('fadeOut', [transition('* => *', useAnimation(fadeOut, {
      params: { 
        timing: 4,
        delay: 2, 
        fromOpacity: 100, 
        toOpacity: 0 
      }
    }))])
  ]
})
export class SecurityQuestionsComponent implements OnInit {

  @ViewChild('answerModal', {static: false}) answerModal: any;

  fadeIn: any;
  fadeOut: any;

  readonly questions = questions;
  question: any;
  questionIdx:number = -1;
  answerResponse:string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextQuestion():void {
    if (this.questionIdx < this.questions.length-1) {
    this.questionIdx++;
    this.question = this.questions[this.questionIdx];
    } else {
      this.router.navigate(['/present']);
    }
  }

  checkAnswer(selection:string): void {
    if (this.question.answer == selection) {
      this.answerResponse = this.question.response.correct;
      this.answerModal.show()
      this.nextQuestion();
    } else {
      this.answerResponse = this.question.response.incorrect;
      this.answerModal.show()
    }
  }
}
