import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteoDetailComponent } from './testeo-detail.component';

describe('TesteoDetailComponent', () => {
  let component: TesteoDetailComponent;
  let fixture: ComponentFixture<TesteoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
