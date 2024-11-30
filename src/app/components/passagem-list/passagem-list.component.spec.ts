import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemListComponent } from './passagem-list.component';

describe('PassagemListComponent', () => {
  let component: PassagemListComponent;
  let fixture: ComponentFixture<PassagemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassagemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassagemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
