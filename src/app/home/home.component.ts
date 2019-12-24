import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { trigger, transition, useAnimation } from '@angular/animations';
import { tada } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('tada', [transition('* => *', useAnimation(tada))])
  ]
})
export class HomeComponent implements OnInit {

  private christmasDate:Date = new Date('2019-12-25');
  tada: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showSecurityQuestions():void {
    if (new Date() >= this.christmasDate) {
      this.router.navigate(['/security-questions']);
    } else {
      this.router.navigate(['/countdown']);
    }
  }
}
