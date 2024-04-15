import { Component } from '@angular/core';

interface Student {
  Nro: number;
  Name: string;
  Age: number;
  Class: string;
};

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  Students: Student[] = [

    { Nro:1, Name: "Juan", Age: 18, Class: "First Grade" },
    { Nro:2, Name: "Maria", Age: 17, Class: "First Grade" },
    { Nro:3, Name: "Lucio", Age: 19, Class: "Second Grade" },
    { Nro:4, Name: "Martin", Age: 19, Class: "Second Grade" },
    { Nro:5, Name: "Lucas", Age: 20, Class: "Third Grade" },
    { Nro:6, Name: "Matias", Age: 17, Class: "First Grade" }
  ]

  displayedColumns: string[] = ['Nro', 'Name', 'Age', 'Class'];
  dataSource = this.Students;
}
