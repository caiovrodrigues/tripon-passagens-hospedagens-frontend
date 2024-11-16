import { Component } from '@angular/core';
import { UsuarioResponseDTO } from '../../model/model';
import { UserDataClientService } from '../../services/user-data-client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  userLogado!: Observable<UsuarioResponseDTO | null>;
  
  constructor(private userData: UserDataClientService){}

  ngOnInit(){
    this.userLogado = this.userData.usuarioLogado$;
  }

}
