import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passagem } from '../model/model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {
  
  constructor(private http: HttpClient) { }

  findAll(): Observable<Passagem[]> {
    return this.http.get<Passagem[]>(environment.baseUrl + 'api/passagens');
  }
  
  salvarPassagem(passagem: Passagem): Observable<Passagem>{
    return this.http.post<Passagem>(environment.baseUrl + 'api/passagens', passagem);
  }

  editarPassagem(passagem: any): Observable<void>{
    return this.http.put<void>(environment.baseUrl + 'api/passagens', passagem);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(environment.baseUrl + `api/passagens/${id}`);
  }
}
