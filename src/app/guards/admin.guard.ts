import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Observable, take } from 'rxjs';
import { UserDataClientService } from '../services/user-data-client.service';

export const adminGuard: CanActivateFn = (route, state) => {
  console.log("VERIFICANDO AUTORIZAÇÃO DO USUÁRIO...");
  
  let userData = inject(UserDataClientService);

  return new Observable<boolean>(subscriber => {
    userData.usuarioLogado$.pipe(take(1)).subscribe(userLogged => {
      console.log(userLogged);
      if(userLogged){
        let isAdmin = userLogged.roles.includes("ADMIN")
        subscriber.next(isAdmin);
      }
      subscriber.next(false);
    });
  });
};
