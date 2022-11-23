import { Component, OnInit } from '@angular/core';
import { celebrity } from '../model/celebrity.model';
import { CelebrityService } from '../services/celebrity-service.service';

@Component({
  selector: 'app-user-details-accordion',
  templateUrl: './user-details-accordion.component.html',
  styleUrls: ['./user-details-accordion.component.css']
})
export class UserDetailsAccordionComponent implements OnInit {

  celebrities!: celebrity[];
  collapsed!: boolean;
  collapsedAccordion!: number;
  editClicked!: boolean;
  constructor(private celebrityService: CelebrityService) { }

  ngOnInit(): void {
    this.celebrityService.getCelebrities().subscribe(data => {
      this.celebrities = data;
    });
    this.collapsed = true;
    this.editClicked = false;
  }

  collapseClicked(num: number) {
    this.collapsed = !this.collapsed;
    this.collapsedAccordion = num;
  }

  onEditClicked(celebrityEdited: { index: number, editedCelebrity: celebrity }) {
    this.editClicked = true;
    console.log(celebrityEdited.editedCelebrity);
  }

}
