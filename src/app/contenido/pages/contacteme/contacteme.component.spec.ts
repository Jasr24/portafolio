import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactemeComponent } from './contacteme.component';

describe('ContactemeComponent', () => {
  let component: ContactemeComponent;
  let fixture: ComponentFixture<ContactemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
