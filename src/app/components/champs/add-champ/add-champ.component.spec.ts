import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChampComponent } from './add-champ.component';

describe('AddChampComponent', () => {
  let component: AddChampComponent;
  let fixture: ComponentFixture<AddChampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
