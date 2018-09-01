import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchteacherComponent } from './searchteacher.component';

describe('SearchteacherComponent', () => {
  let component: SearchteacherComponent;
  let fixture: ComponentFixture<SearchteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
