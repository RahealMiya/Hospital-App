import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdrComponent } from './viewdr.component';

describe('ViewdrComponent', () => {
  let component: ViewdrComponent;
  let fixture: ComponentFixture<ViewdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
