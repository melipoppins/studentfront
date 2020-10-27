import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = new Student();
  submitted = false;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save(): void {
    this.studentService.createStudent(this.student)
      .subscribe( data => {
        console.log(data);
        this.student = new Student();
        this.gotoList();
    },
      error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['students']);
  }

}
