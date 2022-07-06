import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachdeptComponent } from './serachdept.component';

describe('SerachdeptComponent', () => {
  let component: SerachdeptComponent;
  let fixture: ComponentFixture<SerachdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachdeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
