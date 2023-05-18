import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistChampsComponent } from './userlist-champs.component';

describe('UserlistChampsComponent', () => {
  let component: UserlistChampsComponent;
  let fixture: ComponentFixture<UserlistChampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistChampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlistChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
