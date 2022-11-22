import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { celebrity } from '../model/celebrity.model';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.css']
})
export class UserDescriptionComponent implements OnInit {
  @Input() celeb!: celebrity;
  @Input() index!: number;
  @Output() edited = new EventEmitter<{ index: number, editedCelebrity: celebrity }>();
  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    this.edited.emit({ index: this.index, editedCelebrity: this.celeb });
  }

  onDelete() {

  }

}
