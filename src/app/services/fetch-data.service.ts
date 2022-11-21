import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { celebrity } from '../model/celebrity.model';
import { CelebrityService } from './celebrity-service.service';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  celebrities!: celebrity[];

  constructor(private http: HttpClient) {

  }

  public getValues(): Observable<any> {
    return this.http.get("./assets/data/celebrities.json");
  }
}
