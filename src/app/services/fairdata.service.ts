import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fair } from '../models/fair.model';
import {count, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FairdataService {

  endPoint= '/demoServer/rest';
  constructor(private readonly http:HttpClient) { }

  public fair: Fair = new Fair();

  getFairData(): Observable<any>{
    return this.fair.name.length === 0 ?
      this.http.get<any>(this.endPoint + '/fair/minimaldata/2').pipe(
        map(
          f => {
          this.fair.name = f.fairName;
          this.fair.locale = f.defaultLocale.locale;
          return this.fair;
        })
      )
     :of(this.fair);
  }
}

