import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { UsuarioResponseDTO } from './model/model';
import { AuthService } from './services/auth.service';
import { UserDataClientService } from './services/user-data-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  constructor(private primeNgConfig: PrimeNGConfig, private authService: AuthService, private userData: UserDataClientService){}

  ngOnInit(){
    this.primeNgConfig.ripple = true;

    if(localStorage.getItem("token")){
      this.authService.findByToken().subscribe({
        next: (usuario) => {
          this.userData.setUsuarioLogado(usuario);
        },
        error: (err) => {
          this.userData.deleteToken();
        }
      });
    }

  }

}
