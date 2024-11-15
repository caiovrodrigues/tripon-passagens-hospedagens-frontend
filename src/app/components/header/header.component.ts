import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserDataClientService } from '../../services/user-data-client.service';
import { LoginComponent } from '../login/login.component';
import { UsuarioResponseDTO } from '../../model/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  items: MenuItem[] | undefined;
  ref: DynamicDialogRef | undefined;
  usuarioLogado$!: Observable<UsuarioResponseDTO | null>;

  constructor(private dialogService: DialogService, private userData: UserDataClientService){}

  ngOnInit() {
    this.usuarioLogado$ = this.userData.usuarioLogado$;
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home'
          },
          {
              label: 'Features',
              icon: 'pi pi-star'
          },
          {
              label: 'Projects',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'Core',
                      icon: 'pi pi-bolt',
                      shortcut: '⌘+S'
                  },
                  {
                      label: 'Blocks',
                      icon: 'pi pi-server',
                      shortcut: '⌘+B'
                  },
                  {
                      label: 'UI Kit',
                      icon: 'pi pi-pencil',
                      shortcut: '⌘+U'
                  },
                  {
                      separator: true
                  },
                  {
                      label: 'Templates',
                      icon: 'pi pi-palette',
                      items: [
                          {
                              label: 'Apollo',
                              icon: 'pi pi-palette',
                              badge: '2'
                          },
                          {
                              label: 'Ultima',
                              icon: 'pi pi-palette',
                              badge: '3'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope',
              badge: '3'
          }
      ];
  }

  mostrarLogin(){
    this.ref = this.dialogService.open(LoginComponent, {
      header: 'Login',
      width: '35vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      }
    });

  }

  logout(){
    this.userData.deslogar();
  }

}
