import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalContentComponent } from './personal-content.component';

describe('PersonalContentComponent', () => {
  let component: PersonalContentComponent;
  let fixture: ComponentFixture<PersonalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
