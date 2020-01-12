import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../Student';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  StudentBranch: any;
  StudentEmail: any;
  StudentName: any;

  constructor(private studentService: StudentService) { }
  student: Student = new Student();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }
  studentsaveform=new FormGroup({  
    student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    student_email:new FormControl('',[Validators.required,Validators.email]),  
    student_branch:new FormControl()  
  });  
  onSubmit(){   
    this.submitted = true;  
    this.save();  
  }  
  save() {
    this.studentService.create(this.student).subscribe(data => {
      this.student = data;
      console.log(data);
    }, error => console.log(error));
    this.student = new Student();
  }
  get name(){
    return this.studentsaveform.get("student_name");
  }
  get email(){
    return this.studentsaveform.get("student_email");
  }
  get branch(){
    return this.studentsaveform.get("student_branch");
  }
  addStudentForm(){
    this.submitted=false;
    this.studentsaveform.reset();
  }
}
