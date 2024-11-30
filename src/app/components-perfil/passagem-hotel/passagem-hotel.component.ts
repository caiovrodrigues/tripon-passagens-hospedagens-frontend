import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Localidade } from '../../model/model';
import { LocalidadeService } from '../../services/localidade.service';
import { PassagemService } from '../../services/passagem.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passagem-hotel',
  templateUrl: './passagem-hotel.component.html',
  styleUrl: './passagem-hotel.component.scss'
})
export class PassagemHotelComponent {

  passagemForm!: FormGroup;
  hotelForm!: FormGroup;
  stateOptions: any[] = [{ label: 'Passagem Aérea', value: 'passagem-aerea' },{ label: 'Hotel', value: 'hotel' }];
  escolhaForm: string = 'passagem-aerea';
  localidades!: Localidade[];
  countries!: any;
  dateNow = new Date();

  constructor(private passagemService: PassagemService, private locService: LocalidadeService, private fb: FormBuilder, private messageService: MessageService, private router: Router){}

  ngOnInit(){
    this.passagemForm = this.fb.group({
      origem: [],
      destino: [],
      dataIda: [],
      dataVolta: [],
      preco: [],
    });

    this.hotelForm = this.fb.group({
      nome: [],
      descricao: [],
      quartos: [],
      banheiros: [],
      imgUrl: []
    });

    this.countries = [
      {
          name: 'Brasil',
          code: 'BR',
          states: [
              {
                  name: 'São Paulo',
                  cities: [
                      { cname: 'Guarulhos' },
                      { cname: 'Congonhas'},
                      { cname: 'Ribeirão Preto' }
                  ]
              },
              {
                  name: 'Rio de janeiro',
                  cities: [
                      { cname: 'Arraial do Cabo' },
                      { cname: 'Búzios' }
                  ]
              }
          ]
      }
    ];

    this.carregaLocalidades();
  }

  carregaLocalidades(){
    this.locService.getAllLocalidades().subscribe({
      next: (localidades) => this.localidades = localidades,
      error: (err) => console.log(err)
    })
  }

  submitForm(tipo: string){
    if(tipo === 'passagem-aerea'){
      this.passagemService.salvarPassagem(this.passagemForm.value).subscribe({
        next: (data) => {
          console.log(data);
          this.messageService.add({ severity: 'success', summary: 'Passagem criada', detail: `Passagem criada com sucesso` })
          this.passagemForm.patchValue({
            origem: [],
            destino: [],
            dataIda: [],
            dataVolta: [],
            preco: [],
          })
        },
        error: (err) => console.log(err)
      })
    }
  }

}
