import { Component } from '@angular/core';
import { Hotel } from '../../model/model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrl: './top-destination.component.scss'
})
export class TopDestinationComponent {

  hoteis!: Hotel[];
  responsiveOptions: any[] | undefined;

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.findAll().subscribe({
      next:(hoteis) => this.hoteis = hoteis,
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
