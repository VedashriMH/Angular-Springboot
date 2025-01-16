import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  student: Student = {name: '', email: '', course: '' };

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {}

  addStudent(): void {
    this.studentService.addStudent(this.student)
      .subscribe(() => this.router.navigate(['/']));
  }
}
