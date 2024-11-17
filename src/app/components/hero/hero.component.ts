import { Component } from '@angular/core';
import { UsuarioResponseDTO } from '../../model/model';
import { UserDataClientService } from '../../services/user-data-client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  userLogado!: Observable<UsuarioResponseDTO | null>;

  countries: any[] | undefined;
  selectedCity: any;
  dataIda: any;
  dataVolta: any;
  dataMinima = new Date();

  constructor(private userData: UserDataClientService){}

  ngOnInit(){
    this.userLogado = this.userData.usuarioLogado$;
    this.countries = [
      {
          name: 'Australia',
          code: 'AU',
          flagUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg',
          states: [
              {
                  name: 'New South Wales',
                  cities: [
                      { cname: 'Sydney', code: 'A-SY' },
                      { cname: 'Newcastle', code: 'A-NE' },
                      { cname: 'Wollongong', code: 'A-WO' }
                  ]
              },
              {
                  name: 'Queensland',
                  cities: [
                      { cname: 'Brisbane', code: 'A-BR' },
                      { cname: 'Townsville', code: 'A-TO' }
                  ]
              }
          ]
      },
      {
          name: 'Canada',
          code: 'CA',
          flagUrl: 'https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png',
          states: [
              {
                  name: 'Quebec',
                  cities: [
                      { cname: 'Montreal', code: 'C-MO' },
                      { cname: 'Quebec City', code: 'C-QU' }
                  ]
              },
              {
                  name: 'Ontario',
                  cities: [
                      { cname: 'Ottawa', code: 'C-OT' },
                      { cname: 'Toronto', code: 'C-TO' }
                  ]
              }
          ]
      },
      {
          name: 'United States',
          code: 'US',
          flagUrl: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
          states: [
              {
                  name: 'California',
                  cities: [
                      { cname: 'Los Angeles', code: 'US-LA' },
                      { cname: 'San Diego', code: 'US-SD' },
                      { cname: 'San Francisco', code: 'US-SF' }
                  ]
              },
              {
                  name: 'Florida',
                  cities: [
                      { cname: 'Jacksonville', code: 'US-JA' },
                      { cname: 'Miami', code: 'US-MI' },
                      { cname: 'Tampa', code: 'US-TA' },
                      { cname: 'Orlando', code: 'US-OR' }
                  ]
              },
              {
                  name: 'Texas',
                  cities: [
                      { cname: 'Austin', code: 'US-AU' },
                      { cname: 'Dallas', code: 'US-DA' },
                      { cname: 'Houston', code: 'US-HO' }
                  ]
              }
          ]
      }
  ];

  setTimeout(() => {
    console.log(this.selectedCity)
  }, 5000);
  }

  

}
