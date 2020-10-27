import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id: number;
  student: Student;
  submitted = false;

  constructor( private route: ActivatedRoute, private router: Router, private studentService: StudentService ) { }

  ngOnInit(): void {
    this.student = new Student();
    this.id = this.route.snapshot.params.id;
    this.studentService.getStudent(this.id)
      .subscribe( data => {
        console.log(data);
        this.student = data;
      },
        error => console.log(error));
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.id, this.student)
      .subscribe( data => {
        console.log(data);
        this.student = new Student();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.updateStudent();
  }

  gotoList(): void {
    this.router.navigate(['students']);
  }
}
