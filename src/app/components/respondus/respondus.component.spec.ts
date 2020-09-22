import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondusComponent } from './respondus.component';

describe('RespondusComponent', () => {
  let component: RespondusComponent;
  let fixture: ComponentFixture<RespondusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
