import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perant',
  templateUrl: './perant.component.html',
  styleUrls: ['./perant.component.css']
})
export class PerantComponent implements OnInit {
  x:number =3;
  y:number = 4;
  z:number = 4;
  constructor() { }

  ngOnInit(): void {
  }
  setZ(msg:number):void{
    this.z=msg;
  }
}
