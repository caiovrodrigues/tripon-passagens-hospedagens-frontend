import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserDataClientService } from '../../services/user-data-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private dialogRef: DynamicDialogRef, private userData: UserDataClientService){}

  ngOnInit(){
    console.log("COMPONENTE LOGIN CRIADO");

    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
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
        },
        error: (err) => {
          console.log("Deu erro na requisição");
        }
      })

    }
  }

}
