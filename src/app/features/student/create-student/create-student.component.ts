import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListStudent } from 'src/app/model/list-student';
import { ListStudentService } from 'src/app/service/list-student.service';
import { MenubarComponent } from 'src/app/shared/menubar/menubar.component';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  createStudentForm: any;
  student: ListStudent = new ListStudent();
  errorCode: any = null;
  errorScore: any = null;
  errorName: any = null;
  errorAddress: any = null;
  constructor(
    private listStudentService: ListStudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.createStudentForm = new FormGroup({
      studentCode: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10)
      ]),
      studentName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20)
      ]),
      studentBirthDay: new FormControl(),
      studentAddress: new FormControl(null, [
        Validators.maxLength(255)
      ]),
      studentScore: new FormControl(null, [
        Validators.pattern('[0-9]*[.][0-9]')
      ])
    });
  }

  onGenerateCode() {
    if (this.createStudentForm.value.studentCode === null) {
      var val = Math.floor(Math.random() * 990);
      val += Math.floor((val + 110) / 110);
      this.createStudentForm.patchValue({
        studentCode: "STU" + ('000' + val).substr(-3)
        // formControlName2: myValue2 (can be omitted)
      });
    }
  }

  saveStudent() {
    this.errorCode = null;
    this.errorName = null;
    this.errorAddress = null;
    this.errorScore = null;
    if (!this.createStudentForm.get('studentCode').valid) {
      this.errorCode = "Please generate Student Code"
    } else if (!this.createStudentForm.get('studentName').valid) {
      this.errorName = "Please fill in Student Name"
    } else if (!this.createStudentForm.get('studentAddress').valid) {
      this.errorAddress = "Invalid Student Address"
    }
    else if (!this.createStudentForm.get('studentScore').valid) {
      this.errorScore = "Invalid Average Score"
    }
    if (this.createStudentForm.valid) {
      this.student.studentCode = this.createStudentForm.value.studentCode;
      this.student.studentName = this.createStudentForm.value.studentName;
      this.student.dateOfBirth = this.createStudentForm.value.studentBirthDay;
      this.student.address = this.createStudentForm.value.studentAddress;
      this.student.averageScore = this.createStudentForm.value.studentScore;
      this.listStudentService.createStudent(this.student).subscribe(data => {
        console.log(data);
        this.goToListStudent();
      },
        error => console.log(error));
    }

  }

  goToListStudent() {
    this.router.navigate(['/students'])
  }

  onSubmit() {
    console.log(this.student);
    this.saveStudent();
  }



}
