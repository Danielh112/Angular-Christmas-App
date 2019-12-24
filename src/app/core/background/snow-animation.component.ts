import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-snow-animation',
  templateUrl: './snow-animation.component.html',
  styleUrls: ['./snow-animation.component.scss']
})
export class SnowAnimationComponent implements AfterViewInit {

  @ViewChild('sky', {static: false}) canvasEl: ElementRef;
  public ctx: CanvasRenderingContext2D;

  /* Snow Effect */
  private particleCount:number  = 30;
  private particleMax:number    = 500;
  private snowflakes            = [];
  private snowflake: object;
  private active:boolean = false;

  /* Canvas */
  private width:number;
  private height:number;

  constructor() {}

  ngAfterViewInit() {
    this.setupCanvas()
    this.generateSnowFlakes();

    this.onResize();
    window.addEventListener('resize', this.onResize, false);
  }

  setupCanvas = () => {
    this.ctx = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.width = document.querySelector('#sky').clientWidth;
    this.height = document.querySelector('#sky').clientHeight;
  }

  generateSnowFlakes = () => {
    this.snowflakes = [];
    for (let i = 0; i < this.particleMax; i++) {
      let snowflake:Snowflake = new Snowflake();
      snowflake.reset();
      this.snowflakes.push(snowflake);
    }
  }

  update = () => {

    this.ctx.clearRect(0, 0, this.width, this.height);

    if (!this.active) {
      return;
    }

    for (let i = 0; i < this.particleCount; i++) {
      let snowflake = this.snowflakes[i];

      if (snowflake == null) {
        console.log(this.particleCount)
      }

      snowflake.y += snowflake.vy;
      snowflake.x += snowflake.vx;

      this.ctx.globalAlpha = snowflake.o;
      this.ctx.beginPath();
      this.ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fill();

      if (snowflake.y > this.height) {
        snowflake.reset();
      }
    }
    this.requestAnimFrame(this.update);
  }

  onResize = () => {
    this.width = document.querySelector('#sky').clientWidth;
    this.height = document.querySelector('#sky').clientHeight;
    (this.canvasEl.nativeElement as HTMLCanvasElement).width = this.width;
    (this.canvasEl.nativeElement as HTMLCanvasElement).height = this.height;
    this.ctx.fillStyle = '#FFF';

    var wasActive = this.active;
    this.active = this.width > 50;

    if (!wasActive && this.active) {
      this.requestAnimFrame(this.update);
    }
  }

  requestAnimFrame: (callback: () => void) => void = (function() {
    return window.requestAnimationFrame ||
    (<any>window).webkitRequestAnimationFrame ||
    (<any>window).mozRequestAnimationFrame ||
    (<any>window).oRequestAnimationFrame ||
    function(callback:any){
        window.setTimeout(callback, 500);
    };
  })();
}

class Snowflake {
    private x:number  = 0;
    private y:number = 0;
    private vy:number = 0;
    private vx:number = 0;
    private r:number = 0;
    private o:number = 0;

  reset = () => {
    this.x = Math.random() * document.querySelector('#sky').clientWidth;
    this.y = Math.random() * - document.querySelector('#sky').clientHeight;
    this.vy = 1 + Math.random() * 3;
    this.vx = 0.5 - Math.random();
    this.r = 1 + Math.random() * 2;
    this.o = 0.5 + Math.random() * 0.5;
  }
}
