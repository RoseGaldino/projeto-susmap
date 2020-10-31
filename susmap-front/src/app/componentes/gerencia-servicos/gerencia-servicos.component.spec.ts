import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaServicosComponent } from './gerencia-servicos.component';

describe('GerenciaServicosComponent', () => {
  let component: GerenciaServicosComponent;
  let fixture: ComponentFixture<GerenciaServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciaServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
