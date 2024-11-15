import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario, UsuarioResponseDTO } from '../../model/model';
import { Observable } from 'rxjs';
import { UserDataClientService } from '../../services/user-data-client.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit, OnDestroy{

  userLogado$!: Observable<UsuarioResponseDTO | null>;
  users!: Usuario[];

  constructor(private authService: AuthService, private userData: UserDataClientService){}

  ngOnInit(): void {
    this.userLogado$ = this.userData.usuarioLogado$;
    this.authService.todosUsuarios().subscribe({
      next: (value) => {
        console.log(value);
        this.users = value;
      },
      error: (err) => {
        console.log(err);
      }
    })    
  }

  ngOnDestroy(): void {
    console.log("AdminComponent destruído");
  }

}
