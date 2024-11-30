import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  
  let authService = inject(AuthService);
  let messageService = inject(MessageService);
  let router = inject(Router);

  if(!localStorage.getItem("token")){
    messageService.add({ severity: 'error', summary: 'Erro', detail: 'Você precisar estar logado para acessar essa rota', life: 2000 });
    router.navigateByUrl("");
    return false;
  }

  return new Observable<boolean>(subscriber => {
    authService.isAdmin().subscribe({
      next: () => {
        messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Autorizado! Você é um administrador', life: 2000 });
        subscriber.next(true);
      },
      error: () => {
        router.navigateByUrl("admin");
        messageService.add({ severity: 'error', summary: 'Erro', detail: 'Somente administradores podem acessar essa rota', life: 2000 });
      }
    });
  });
};
