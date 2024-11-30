import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidade } from '../model/model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalidadeService {

  constructor(private http: HttpClient) { }

  getAllLocalidades(): Observable<Localidade[]>{
    return this.http.get<Localidade[]>(environment.baseUrl + 'api/localidades');
  }

}
