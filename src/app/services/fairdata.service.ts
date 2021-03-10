import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FairdataService {

  endPoint= '/evfServer/rest';
  constructor(private readonly http:HttpClient) { }

  getFairData(): Observable<any>{
    return this.http.get<any>(this.endPoint + '/fair/minimaldata/2');
  }
}
