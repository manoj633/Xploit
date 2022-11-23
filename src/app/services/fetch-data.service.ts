import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { celebrity } from '../model/celebrity.model';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  celebrities!: celebrity[];

  constructor(private http: HttpClient) {

  }

  public getValues(): Observable<celebrity[]> {
    return this.http.get<celebrity[]>("./assets/data/celebrities.json").pipe(map(data => {
      for (const _key in data) {
        data[_key].ageInYears = this.calculateAgeInYears(data[_key].dob);
      }
      return data;
    }));
  }

  calculateAgeInYears(dob: string) {
    var dateOfBirth = new Date(dob);
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dateOfBirth.getTime();

    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);

    //extract year from date      
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user  
    var age = Math.abs(year - 1970);
    return age;
  }
}
