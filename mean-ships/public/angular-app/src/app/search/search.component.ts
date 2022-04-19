import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipsDataService } from '../ships-data.service';
import { Ship } from '../ships/ships.component'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('form')
  form!:NgForm;

  ships!:Ship[];
  geoForm!:GeoForm;


  constructor(private route:ActivatedRoute, private service:ShipsDataService, private _router:Router) { }

  ngOnInit(): void {
    this.geoForm = new GeoForm(0,0,0);
  }
  SearchPlz(form:NgForm):void{
    this.service.getShipsGeo(form.value).then(response =>this.ships = response)
  }



}
export class GeoForm{
  #lat!:Number
  #lon!:Number
  #dist!:Number

  get lat(){return this.#lat}
  get lon(){return this.#lon}
  get dist(){return this.#dist}
  set lat(x:Number){this.#lat=x;}
  set lon(x:Number){this.#lon=x;}
  set dist(x:Number){this.#dist=x;}

  constructor(x:Number,y:Number,z:Number){
    this.#lat = x;
    this.#lon = y;
    this.#dist = z;

  }
}