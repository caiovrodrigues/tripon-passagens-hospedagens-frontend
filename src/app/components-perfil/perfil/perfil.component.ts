import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioInfoResponseDTO } from '../../model/model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit {

  usuarioInfo!: UsuarioInfoResponseDTO;
  perfilForm!: FormGroup;
  isMenuOpen: boolean = false;
  
  constructor(private userService: UserService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.userService.getDetalhesPerfil().subscribe({
      next: (usuarioInfo) => {
        this.usuarioInfo = usuarioInfo;
        this.setFormWithUsuarioData(usuarioInfo);
      },
      error: (err) => console.log("Houveu um erro ao buscar informações do usuário", err)
    })

    this.perfilForm = this.fb.group({
      nome: [],
      sobrenome: [],
      username: [],
      email: [],
      cpf: []
    })
  }

  setFormWithUsuarioData(user: UsuarioInfoResponseDTO){
    this.perfilForm.patchValue({
      nome: user.nome,
      sobrenome: user.sobrenome,
      username: user.username,
      email: user.email,
      cpf: user.cpf
    });
  }

  toggleMenuBar(){
    this.isMenuOpen = !this.isMenuOpen;
    console.log("Toggle menu");
  }

}
