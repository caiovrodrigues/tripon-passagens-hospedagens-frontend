import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioResponseDTO } from '../../model/model';
import { UserDataClientService } from '../../services/user-data-client.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit {

  usuarioLogado$!: Observable<UsuarioResponseDTO | null>
  isMenuOpen: boolean = false;
  
  constructor(private userData: UserDataClientService){}

  ngOnInit(): void {
    this.usuarioLogado$ = this.userData.usuarioLogado$;
  }

  toggleMenuBar(){
    this.isMenuOpen = !this.isMenuOpen;
    console.log("Toggle menu");
  }

}
