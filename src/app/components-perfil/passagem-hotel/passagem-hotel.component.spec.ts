import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemHotelComponent } from './passagem-hotel.component';

describe('PassagemHotelComponent', () => {
  let component: PassagemHotelComponent;
  let fixture: ComponentFixture<PassagemHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassagemHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassagemHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
