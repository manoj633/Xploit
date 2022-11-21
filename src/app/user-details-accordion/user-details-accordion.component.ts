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
  constructor(private celebrityService: CelebrityService) { }

  ngOnInit(): void {
    this.celebrityService.getCelebrities().subscribe(data => {
      console.log(data);
      this.celebrities = data;
      console.log(this.celebrities);
    });
    console.log(this.celebrityService.getCelebrities());
  }


}
