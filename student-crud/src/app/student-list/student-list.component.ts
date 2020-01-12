import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  students: Observable<Student[]>;
  student: Student = new Student();
  deleteMessage = false;
  studentlist: any;
  isupdated = false;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu:[[6,16,20, -1], [6, 16, 20, "ALL"]],
      processing: true
    };
    this.studentService.getAll().subscribe(data => {
      this.students = data;
      this.dtTrigger.next();
    })
  }
  deleteStudent(id: number){
    this.studentService.delete(id).subscribe(data => {
      this.deleteMessage = true;
      this.studentService.getAll().subscribe(data => {
        this.students = data;
      })
    })
  }
  /*
  updateStudent(id: number){  
    this.studentservice. 
      .subscribe(  
        data => {  
          this.studentlist=data             
        },  
        error => console.log(error));  
  }  
  */
  studentupdateform=new FormGroup({  
    student_id:new FormControl(),  
    student_name:new FormControl(),  
    student_email:new FormControl(),  
    student_branch:new FormControl()  
  });  
  
  updateStu(updstu){  
    this.student=new Student();   
   this.student.student_id=this.StudentId.value;  
   this.student.student_name=this.StudentName.value;  
   this.student.student_email=this.StudentEmail.value;  
   this.student.student_branch=this.StudentBranch.value;  
   console.log(this.StudentBranch.value);  
     
  
   this.studentService.update(this.student.student_id,this.student).subscribe(  
    data => {       
      this.isupdated=true;  
      this.studentService.getAll().subscribe(data =>{  
        this.students =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get StudentName(){  
    return this.studentupdateform.get('student_name');  
  }  
  
  get StudentEmail(){  
    return this.studentupdateform.get('student_email');  
  }  
  
  get StudentBranch(){  
    return this.studentupdateform.get('student_branch');  
  }  
  
  get StudentId(){  
    return this.studentupdateform.get('student_id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}
