import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCapteurComponent } from './update-capteur.component';

describe('UpdateCapteurComponent', () => {
  let component: UpdateCapteurComponent;
  let fixture: ComponentFixture<UpdateCapteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCapteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCapteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
