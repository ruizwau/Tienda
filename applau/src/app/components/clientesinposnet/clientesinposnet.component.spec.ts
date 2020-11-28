import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesinposnetComponent } from './clientesinposnet.component';

describe('ClientesinposnetComponent', () => {
  let component: ClientesinposnetComponent;
  let fixture: ComponentFixture<ClientesinposnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesinposnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesinposnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
