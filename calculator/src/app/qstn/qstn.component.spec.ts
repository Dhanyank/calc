import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QstnComponent } from './qstn.component';

describe('QstnComponent', () => {
  let component: QstnComponent;
  let fixture: ComponentFixture<QstnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QstnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QstnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
