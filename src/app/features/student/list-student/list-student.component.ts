import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListStudent } from 'src/app/model/list-student';
import { ListStudentService } from 'src/app/service/list-student.service';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  searchForm: any;
  // studentCode!:string;
  // studentName!:string;
  // dateOfBirth!:string;

  liststudent?: ListStudent[];
  dtOptions: DataTables.Settings = {};
  constructor(
    private listStudentService: ListStudentService,
    private router: Router) { }

  ngOnInit() {
    // if(this.liststudent == null|| this.liststudent.length == 0){
    this.getListStudent();
    // }
    this.dtOptions = {
      searching: false,
      pagingType: 'full_numbers',
      lengthChange: false,
      info: false,
      processing: true
    };

    this.searchForm = new FormGroup({
      studentCode: new FormControl(null, [Validators.required]),
      studentName: new FormControl(null, [Validators.required]),
      studentBirthDay: new FormControl(null, [Validators.required])
    });
  }

  getListStudent() {
    this.listStudentService.getListStudent().subscribe(data => {
      this.liststudent = data; 
    })

  }

  onSearchStudent(){
    if(!(this.searchForm.value.studentCode == null && this.searchForm.value.studentName == null && this.searchForm.value.studentBirthDay == null)){
      this.listStudentService.searchListStudent(this.searchForm.value.studentCode,this.searchForm.value.studentName,this.searchForm.value.studentBirthDay).subscribe(data => {
        this.liststudent = data;
        // console.log(data);
      });
    }
  }

  onUpdateStudent(id:number){
    this.router.navigate(['update-student', id]);
    // this.searchForm.value.studentCode = 123;
  }

  onDeleteStudent(id:number){
    this.listStudentService.deleteStudentById(id).subscribe(
      data => {
        console.log(data);
        this.getListStudent();
        
      },
      error => console.log(error));
  }
}
