import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserDataClientService } from '../../services/user-data-client.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  cadastroForm!: FormGroup;
  isLoginActive = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private dialogRef: DynamicDialogRef, private userData: UserDataClientService, private messageService: MessageService){}

  ngOnInit(){
    console.log("COMPONENTE LOGIN CRIADO");

    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });

    this.cadastroForm = this.fb.group({
      username: [''],
      email: ['', Validators.email],
      cpf: null,
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    })
  }

  logar(){
    console.log(this.loginForm);
    if(this.loginForm.valid){

      this.authService.logar(this.loginForm.value).subscribe({
        next: (authDetails) => {
          console.log(authDetails);
          this.userData.saveToken(authDetails.token);
          this.userData.setUsuarioLogado(authDetails.data)
          this.dialogRef.close();
          this.messageService.add({ severity: 'success', summary: 'Autenticado', detail: `Seja bem vindo ${authDetails.data.username}` });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Credenciais inválidas' });
        }
      })
    }
  }

  cadastrar(){
    console.log(this.cadastroForm);

    if(this.cadastroForm.valid){
      this.authService.criarConta(this.cadastroForm.value).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Criado', detail: `Usuário criado com sucesso` });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Houve um erro ao cadastrar usuário' });
        }
      })
    }
  }

  trocarFormulario(){
    this.isLoginActive = !this.isLoginActive;
  }

}
