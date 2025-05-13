import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea3Component } from './tarea3.component';

describe('Tarea3Component', () => {
  let component: Tarea3Component;
  let fixture: ComponentFixture<Tarea3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
