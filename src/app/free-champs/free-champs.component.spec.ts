import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeChampsComponent } from './free-champs.component';

describe('FreeChampsComponent', () => {
  let component: FreeChampsComponent;
  let fixture: ComponentFixture<FreeChampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeChampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
