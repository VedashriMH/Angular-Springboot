import { Component, OnInit, ViewChild} from '@angular/core';
import { StudentService } from '../student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns =['id','name','email','course','actions'];
  //students: Student[] = [];
  dataSource = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

//   getStudents(): void {
//     this.studentService.getStudents()
//       .subscribe(this.dataSource.data = students;
//         this.dataSource.paginator = this.paginator;);
//
//   }

    getStudents(): void {
        this.studentService.getStudents()
          .subscribe(students => {
            this.dataSource.data = students;
            this.dataSource.paginator = this.paginator; // Attach paginator to data source
          });
      }

//   deleteStudent(id: number): void {
//     this.studentService.deleteStudent(id)
//       .subscribe(() => this.students = this.students.filter(student => student.id !== id));
//   }
    deleteStudent(id: number): void {
        this.studentService.deleteStudent(id)
          .subscribe(() => {
            // Remove deleted student from data source
            this.dataSource.data = this.dataSource.data.filter(student => student.id !== id);
          });
      }
}
