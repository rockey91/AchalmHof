import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionhomeComponent } from './functionhome.component';

describe('FunctionhomeComponent', () => {
  let component: FunctionhomeComponent;
  let fixture: ComponentFixture<FunctionhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
