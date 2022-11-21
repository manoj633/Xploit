import { Injectable } from '@angular/core';
import { celebrity } from '../model/celebrity.model';
import { FetchDataService } from './fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class CelebrityService {

  celebrities!: celebrity[];
  constructor(private fetchData: FetchDataService) {
  }

  public setCelebrities(inputCelebrities: celebrity[]) {
    this.celebrities = inputCelebrities;
  }

  public getCelebrities() {
    return this.fetchData.getValues();
  }
}
