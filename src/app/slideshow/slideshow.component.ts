import { Component, OnInit } from '@angular/core';

export interface Slide {
  name : string;
  date : string;
  rotate?: Boolean;
  video?: Boolean;
  source : string;
};

const Slides:Slide[] = [
  {name: "Daniel get's Smarter",              date: "", source: "assets/images/slideshow/1.jpg"},
  {name: "Golf Day out",                      date: "", source: "assets/images/slideshow/2.jpg"},
  //{name: "Who's Competitive??",               date: "", video: true, source: "assets/images/slideshow/3.MOV"},
  //{name: "Dum Dum Dum",                       date: "", video: true, source: "assets/images/slideshow/4.MOV"},
  {name: "Charlotte and Daniel dress smart",  date: "", source: "assets/images/slideshow/5.jpg"},
  {name: "Booger",                            date: "", source: "assets/images/slideshow/6.jpg"},
  {name: "Daniel get's even smarter",         date: "", source: "assets/images/slideshow/7.jpg"},
  {name: "Charlotte is accident prone",       date: "", source: "assets/images/slideshow/8.jpg"},
  {name: "Woop Woop",                         date: "", source: "assets/images/slideshow/9.jpg"},
  {name: "Central park",                      date: "", source: "assets/images/slideshow/10.jpg"},
  {name: "Central park featuring shorts",     date: "", source: "assets/images/slideshow/11.jpg"},
  {name: "Brooklyn Bridge",                   date: "", source: "assets/images/slideshow/12.jpg"},
  {name: "Another bridge",                    date: "", source: "assets/images/slideshow/13.jpg"},
  {name: "First Christmas Tree",              date: "", source: "assets/images/slideshow/14.jpg"},
  {name: "Featuring gordon and Louise",       date: "", source: "assets/images/slideshow/15.jpg"},
  {name: "Football crazy",                    date: "", source: "assets/images/slideshow/16.jpg"},
  {name: "Woop Woop x2",                      date: "", source: "assets/images/slideshow/18.jpg"},
  {name: "Wait central park again?",          date: "", source: "assets/images/slideshow/19.jpg"},
  {name: "Christmas Tree",                    date: "", source: "assets/images/slideshow/21.jpg"},
  {name: "Hottt",                             date: "", source: "assets/images/slideshow/22.jpg"},
  {name: "Darts, Did I win?",                 date: "", source: "assets/images/slideshow/23.png"},
  {name: "The long Walk",                     date: "", source: "assets/images/slideshow/24.jpg"},
  {name: "Christmas Dinner",                  date: "", source: "assets/images/slideshow/25.jpg"},
  //{name: "Hungry Hungry",                     date: "", video: true, source: "assets/images/slideshow/26.MOV"},
  {name: "Spider Bite",                       date: "", source: "assets/images/slideshow/27.jpg"},
  {name: "You Prettyyyy",                     date: "", source: "assets/images/slideshow/28.jpg"},
];

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent implements OnInit {

  readonly Slides = Slides;

  constructor() { }

  ngOnInit() {
  }
}