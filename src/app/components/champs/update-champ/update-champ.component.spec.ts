import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChampComponent } from './update-champ.component';

describe('UpdateChampComponent', () => {
  let component: UpdateChampComponent;
  let fixture: ComponentFixture<UpdateChampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
