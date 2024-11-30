import { Component } from '@angular/core';
import { Passagem } from '../../model/model';
import { PassagemService } from '../../services/passagem.service';

@Component({
  selector: 'app-passagem-list',
  templateUrl: './passagem-list.component.html',
  styleUrl: './passagem-list.component.scss'
})
export class PassagemListComponent {
  passagens!: Passagem[];
  responsiveOptions: any[] | undefined;

  constructor(private passagemService: PassagemService) {}

  ngOnInit() {
    this.passagemService.findAll().subscribe({
      next:(data) => this.passagens = data,
      error: (err) => console.log(err)
    });

    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
      { breakpoint: '991px',  numVisible: 2, numScroll: 1 },
      { breakpoint: '767px',  numVisible: 1, numScroll: 1 }
    ];
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
            return 'warning';
      }
  }
}
