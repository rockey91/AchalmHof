import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ManageComponent } from './manage.component';
import { ManageModule } from './manage.module';

describe('ManageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ManageModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ManageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
