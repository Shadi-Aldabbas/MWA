import { Component, OnInit } from '@angular/core';
import { GradeServiceService } from '../grade-service.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  grades!:Grade[];
  constructor(private service:GradeServiceService) { }

  ngOnInit(): void {
    this.getGrades()
  }

  getGrades():void{
    this.service.getGrades().subscribe({
      next:grades => this.grades = grades,
      error:err => console.log(err),
      complete: () => console.log("grades",this.grades)
    })
  }
}

export class Score{
  #type!:string;
  #score!:Number

  get type(){return this.#type}
  get score(){return this.#score}
  constructor(type:string,score:Number){
    this.#type=type;
    this.#score=score;
  }
}
export class Grade{
  #_id!:string;
  #student_id!:Number;
  #class_id!:Number;
  #scores!:Score[];

  get _id(){return this.#_id}
  get student_id(){return this.#student_id}
  get class_id(){return this.#class_id}
  get scores(){return this.#scores}

  constructor(id:string,stuId:Number,classId:Number){
    this.#_id=id;
    this.#student_id=stuId;
    this.#class_id=classId;
  }
}