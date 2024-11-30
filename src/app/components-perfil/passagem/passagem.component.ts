import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Passagem } from '../../model/model';
import { PassagemService } from '../../services/passagem.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrl: './passagem.component.scss'
})
export class PassagemComponent {
  
  passagens!: Passagem[];

  statuses!: any[];
  passagemForm!: FormGroup;

  clonedProducts: { [s: string]: Passagem } = {};

  countries: any = [
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

  constructor(private passagemService: PassagemService, private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit() {
    this.getPassagens()

    this.passagemForm = this.fb.group({
      origem: [null, Validators.required],
      destino: [null, Validators.required],
      preco: ['', Validators.required],
    })

    this.statuses = [
        { label: 'In Stock', value: 'INSTOCK' },
        { label: 'Low Stock', value: 'LOWSTOCK' },
        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];
  }

  getPassagens(){
    this.passagemService.findAll().subscribe(data => this.passagens = data);
  }

  onRowEditInit(passagem: Passagem) {
      this.clonedProducts[passagem.id] = { ...passagem };
  }

  onRowEditSave(passagem: Passagem) {
      if (passagem.preco > 0) {
          console.log("Passagem a editar: ", passagem);
          console.log("Novos dados", this.passagemForm.value);
          let obj = {
            id: passagem.id,
            origem: this.passagemForm.value.origem.cname,
            destino: this.passagemForm.value.destino.cname,
            preco: this.passagemForm.value.preco,
          }
          console.log(obj)
          this.passagemService.editarPassagem(obj).subscribe({
            next: () => this.getPassagens(),
            error: (err) => console.log(err)
          });
          delete this.clonedProducts[passagem.id];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Produto atualizado' });
      } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Preço inválido' });
      }
  }

  onRowEditCancel(passagem: Passagem, index: number) {
      this.passagens[index] = this.clonedProducts[passagem.id];
      delete this.clonedProducts[passagem.id];
  }

  deletePassagem(passagem: Passagem){
    this.passagemService.delete(passagem.id).subscribe({
      next: () =>this.getPassagens(),
      error: console.log
    });
  }
}
