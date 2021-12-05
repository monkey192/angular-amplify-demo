import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessErrorComponent } from './access-error.component';

describe('AccessErrorComponent', () => {
  let component: AccessErrorComponent;
  let fixture: ComponentFixture<AccessErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
