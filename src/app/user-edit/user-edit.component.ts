import { Component, Input, OnInit } from '@angular/core';
import { celebrity } from '../model/celebrity.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() celeb!: celebrity;
  constructor() { }

  ngOnInit(): void {
  }

  onSave() {

  }

  onCancel() {

  }

}
