// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ListStudent } from 'src/app/model/list-student';
// import { ListStudentService } from 'src/app/service/list-student.service';


// @Component({
//   selector: 'app-create-student',
//   templateUrl: './update-student.component.html',
//   styleUrls: ['./update-student.component.css']
// })
// export class UpdateStudentComponent implements OnInit {
//   editForm = new FormGroup({
//     studentID: new FormControl(),
//     studentCode: new FormControl(),
//     studentName: new FormControl(),
//     studentBirthDay: new FormControl(),
//     studentAddress: new FormControl(),
//     studentScore: new FormControl()
//   });
//   id?: number;
//   student: ListStudent = new ListStudent();
//   constructor(private listStudentService:ListStudentService,
//     private route: ActivatedRoute,
//     private router: Router) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];
//     this.listStudentService.getStudentById(this.id!).subscribe(data => {
//       this.student = data;
//       // console.log(data);
//     }, error => console.log(error));
   
//   }
//   goToListStudent() {
//     this.router.navigate(['/students']).then(() => {
//       window.location.reload();
//     })
    
//   }

//   onUpdateStudent() {
//     this.listStudentService.updateStudent(this.student).subscribe(data => {
//       console.log(data);
//       this.goToListStudent()
//     },
//       error => console.log(error));
//   }
// }

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListStudent } from 'src/app/model/list-student';
import { ListStudentService } from 'src/app/service/list-student.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  editForm: FormGroup = new FormGroup({
    studentID:new FormControl("", [
      Validators.required
    ]),
    studentCode: new FormControl("", [
      Validators.required,
      Validators.maxLength(10)
    ]),
    studentName: new FormControl("", [
      Validators.required,
      Validators.maxLength(20)
    ]),
    studentBirthDay: new FormControl(""),
    studentAddress: new FormControl("", [
      Validators.maxLength(255)
    ]),
    studentScore: new FormControl("", [
      Validators.pattern('[0-9]*[.][0-9]')
    ])
  });
  id?: number;
  
  constructor(private listStudentService:ListStudentService,
    private route: ActivatedRoute,
    private router: Router) { }
    student: ListStudent = new ListStudent;
    errorScore: any = null;
    errorName: any = null;
    errorAddress: any = null;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.listStudentService.getStudentById(this.id!).subscribe(data => {
    this.student = data;
    console.log(data);
    // this.configValidationEditForm();
    this.editForm.setValue({
      studentID: this.student.studentId, 
      studentCode: this.student.studentCode,
      studentName: this.student.studentName,
      studentBirthDay: this.student.dateOfBirth,
      studentAddress: this.student.address,
      studentScore: this.student.averageScore
    });
      console.log(data);
    }, error => console.log(error));
   
  }
  goToListStudent() {
    this.router.navigate(['/students']).then(() => {
      window.location.reload();
    })
    
  }

  // configValidationEditForm(){
  //   this.editForm = new FormGroup({
  //     studentID:new FormControl("", [
  //       Validators.required
  //     ]),
  //     studentCode: new FormControl("", [
  //       Validators.required,
  //       Validators.maxLength(10)
  //     ]),
  //     studentName: new FormControl("", [
  //       Validators.required,
  //       Validators.maxLength(20)
  //     ]),
  //     studentBirthDay: new FormControl(""),
  //     studentAddress: new FormControl("", [
  //       Validators.maxLength(255)
  //     ]),
  //     studentScore: new FormControl("", [
  //       Validators.pattern('[0-9]*[.][0-9]')
  //     ])
  //   });
  // }

  onUpdateStudent() {
    this.errorName = null;
    this.errorAddress = null;
    this.errorScore = null;
    if (!this.editForm.get('studentName').valid) {
      this.errorName = "Please fill in Student Name"
    } else if (!this.editForm.get('studentAddress').valid) {
      this.errorAddress = "Invalid Student Address"
    }
    else if (!this.editForm.get('studentScore').valid) {
      this.errorScore = "Invalid Average Score"
    }
    if (this.editForm.valid) {
      this.student.studentName = this.editForm.value.studentName
      this.student.dateOfBirth = this.editForm.value.studentBirthDay
      this.student.address = this.editForm.value.studentAddress
      this.student.averageScore = this.editForm.value.studentScore
      this.listStudentService.updateStudent(this.student).subscribe(data => {
        console.log(data);
        this.goToListStudent()
      },
        error => console.log(error));
    }
  }
}



