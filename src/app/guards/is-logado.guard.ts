import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserDataClientService } from '../services/user-data-client.service';

export const isLogadoGuard: CanActivateFn = (route, state) => {

  const userData = inject(UserDataClientService);
  const authService = inject(AuthService);
  const messageService = inject(MessageService);
  const router = inject(Router);
  
  if(!localStorage.getItem("token")){
    messageService.add({ severity: 'error', summary: 'Erro', detail: 'Você precisar estar logado para acessar essa rota', life: 2000 });
    router.navigateByUrl("");
    return false;
  }

  return new Observable<boolean>(subscriber => {
    userData.usuarioLogado$.pipe(take(1)).subscribe(value => {
      if(value){
        console.log("USUÁRIO LOGADO ATRAVÉS DO USERDATA")
        messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Autorizado! Você está logado', life: 2000 });
        subscriber.next(true)
        return;
      }
      
      authService.isLogado().subscribe({
        next: () => {
          console.log("USUÁRIO LOGADO ATRAVÉS DA REQUISIÇÃO ISLOGADO")
          messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Autorizado! Você está logado', life: 2000 });
          subscriber.next();
        },
        error: () => {
          router.navigateByUrl("");
          messageService.add({ severity: 'error', summary: 'Erro', detail: 'Você precisar estar logado para acessar essa rota', life: 2000 });
        }
      })
    });
  });
  
};
