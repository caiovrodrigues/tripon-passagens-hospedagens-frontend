import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../model/model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(environment.baseUrl + 'api/hoteis');
  }

}
