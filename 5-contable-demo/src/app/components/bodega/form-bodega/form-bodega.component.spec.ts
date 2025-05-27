import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBodegaComponent } from './form-bodega.component';

describe('FormBodegaComponent', () => {
  let component: FormBodegaComponent;
  let fixture: ComponentFixture<FormBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBodegaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
