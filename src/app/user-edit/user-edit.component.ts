import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { celebrity } from '../model/celebrity.model';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() celeb!: celebrity;
  @ViewChild('userForm') inputForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    console.log(this.inputForm)
  }

  onCancel() {
    this.inputForm.reset();
  }

}
