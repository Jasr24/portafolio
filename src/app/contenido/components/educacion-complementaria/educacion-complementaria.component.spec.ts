import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionComplementariaComponent } from './educacion-complementaria.component';

describe('EducacionComplementariaComponent', () => {
  let component: EducacionComplementariaComponent;
  let fixture: ComponentFixture<EducacionComplementariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionComplementariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionComplementariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
