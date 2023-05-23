import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapteurComponent } from './list-capteur.component';

describe('ListCapteurComponent', () => {
  let component: ListCapteurComponent;
  let fixture: ComponentFixture<ListCapteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCapteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCapteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
