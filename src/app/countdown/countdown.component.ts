import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  private christmas: Date = new Date('2019-12-25');
  subscription: Subscription;
  timeTillChristmas: String = '';

  constructor() { }

  ngOnInit() {
    this.subscription = interval(1000).subscribe(
      (value: number) => {

        this.timeTillChristmas = this.msToTime((this.christmas.valueOf() - new Date().valueOf()));
      },
      (error: any) => {
        console.log('error');
      },
      () => {
        console.log('observable completed!');
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  msToTime(ms: number) {
    let seconds = Math.floor(ms / 1000)
    let minutes = Math.floor(seconds / 60);
    let hours = Math.round(minutes / 60);
    let days = Math.round(hours / 24);

    return (`${days} Days | ${hours % 24} Hours | ${minutes % 24} Minutes | ${seconds % 60} seconds`)
  }
}
