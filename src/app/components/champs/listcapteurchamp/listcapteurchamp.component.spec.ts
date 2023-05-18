import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcapteurchampComponent } from './listcapteurchamp.component';

describe('ListcapteurchampComponent', () => {
  let component: ListcapteurchampComponent;
  let fixture: ComponentFixture<ListcapteurchampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcapteurchampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcapteurchampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
