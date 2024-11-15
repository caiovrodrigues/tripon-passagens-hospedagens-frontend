import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtTokenResponse, LoginRequest, Usuario, UsuarioResponseDTO } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  logar(credenciais: LoginRequest): Observable<JwtTokenResponse>{
    return this.http.post<JwtTokenResponse>(environment.baseUrl + 'api/usuarios/auth', credenciais);
  }

  findByToken(): Observable<UsuarioResponseDTO>{
    return this.http.get<UsuarioResponseDTO>(environment.baseUrl + 'api/usuarios/token');
  }

  todosUsuarios(): Observable<Usuario[]> {
    return this.http.get<Array<Usuario>>(environment.baseUrl + 'api/usuarios/todos');
  }

}
