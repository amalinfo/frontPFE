import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChampsComponent } from './list-champs.component';

describe('ListChampsComponent', () => {
  let component: ListChampsComponent;
  let fixture: ComponentFixture<ListChampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
