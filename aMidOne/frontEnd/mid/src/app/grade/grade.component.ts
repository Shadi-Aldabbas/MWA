import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { GradeServiceService } from '../grade-service.service';
import { Grade } from '../grades/grades.component';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  grade!:Grade;
  gradeId!:string;
  constructor(private route:ActivatedRoute, private service:GradeServiceService,private _router:Router ) {
    this.grade = new Grade("",0,0);
   }

  ngOnInit(): void {
    this.gradeId = this.route.snapshot.params["gradeId"];
    this.getGrade();
  }
  getGrade():void{
    this.service.getGrade(this.gradeId).subscribe(grade =>{this.grade=grade});
  }

  delete(_id:string):void{
    this.service.deleteGrade(_id).subscribe({
      next:res=>console.log(res),
    })
  }

}
