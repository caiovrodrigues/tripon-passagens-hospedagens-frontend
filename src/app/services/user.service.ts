import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioInfoResponseDTO } from '../model/model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getDetalhesPerfil(): Observable<UsuarioInfoResponseDTO>{
    return this.http.get<UsuarioInfoResponseDTO>(environment.baseUrl + 'api/usuarios/info');
  }
}
