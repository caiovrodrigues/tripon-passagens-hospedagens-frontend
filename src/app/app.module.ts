import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { NgOptimizedImage } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { TopDestinationComponent } from './components/top-destination/top-destination.component';
import { TokenInjection } from './interceptors/token.injection.interceptor';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthService } from './services/auth.service';
import { PerfilComponent } from './components-perfil/perfil/perfil.component';
import { DashboardComponent } from './components-perfil/dashboard/dashboard.component';
import { HistoricoComponent } from './components-perfil/historico/historico.component';
import { PassagemHotelComponent } from './components-perfil/passagem-hotel/passagem-hotel.component';
import { PassagemListComponent } from './components/passagem-list/passagem-list.component';
import { PassagemComponent } from './components-perfil/passagem/passagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    HeroComponent,
    TopDestinationComponent,
    PerfilComponent,
    DashboardComponent,
    HistoricoComponent,
    PassagemHotelComponent,
    PassagemListComponent,
    PassagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    //PrimeNG
    ButtonModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    InputTextModule,
    CheckboxModule,
    DynamicDialogModule,
    ToastModule,
    CarouselModule,
    TagModule,
    CascadeSelectModule,
    CalendarModule,
    DividerModule,
    ImageModule,
    SelectButtonModule,
    InputNumberModule,
    InputTextareaModule,
    TableModule,
    DropdownModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInjection, multi: true},
    DialogService, 
    AuthService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
