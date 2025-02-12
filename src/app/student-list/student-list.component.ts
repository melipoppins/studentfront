import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Observable<Student[]>;

  constructor( private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.students = this.studentService.getStudentsList();
  }

  deleteStudent( id: number ): void {
    this.studentService.deleteStudent( id )
      .subscribe(
      data => {
        console.log( data );
        this.reloadData();
      },
        error => console.log( error ));
  }

  studentDetails( id: number ): void {
    this.router.navigate(['details', id]);
  }

  updateStudent( id: number ): void {
    this.router.navigate(['update', id]);
  }

}
