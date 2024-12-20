import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioResponseDTO } from '../../model/model';
import { UserDataClientService } from '../../services/user-data-client.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{

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
