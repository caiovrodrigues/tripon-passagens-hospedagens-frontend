import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtTokenResponse, LoginRequest, Usuario, UsuarioCreate, UsuarioResponseDTO } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) {}

  logar(credenciais: LoginRequest): Observable<JwtTokenResponse>{
    return this.http.post<JwtTokenResponse>(environment.baseUrl + 'api/usuarios/auth', credenciais);
  }

  criarConta(dados: UsuarioCreate): Observable<void> {
    return this.http.post<void>(environment.baseUrl + 'api/usuarios/criar', dados);
  }

  findByToken(): Observable<UsuarioResponseDTO>{
    return this.http.get<UsuarioResponseDTO>(environment.baseUrl + 'api/usuarios/token');
  }

  todosUsuarios(): Observable<Usuario[]> {
    return this.http.get<Array<Usuario>>(environment.baseUrl + 'api/usuarios/todos');
  }
  
  isAdmin(): Observable<void>{
    return this.http.get<void>(environment.baseUrl + 'api/usuarios/is-admin')
  }

}
