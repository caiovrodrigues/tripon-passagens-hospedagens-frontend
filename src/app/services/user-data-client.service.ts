import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtTokenResponse, UsuarioResponseDTO } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class UserDataClientService {

  private usuarioLogadoObs$ = new BehaviorSubject<UsuarioResponseDTO | null>(null);
  usuarioLogado$ = this.usuarioLogadoObs$.asObservable();

  constructor() { }

  setUsuarioLogado(usuario: UsuarioResponseDTO){
    this.usuarioLogadoObs$.next(usuario);
  }

  deslogar(){
    this.deleteToken();
    this.usuarioLogadoObs$.next(null);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  deleteToken() {
    if(localStorage.getItem("token"))
      localStorage.removeItem("token");
  }

}
