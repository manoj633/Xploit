import { Component } from '@angular/core';
import { FetchDataService } from './services/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private getData: FetchDataService) {
  }


}
