import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeAtendimentoComponent } from './unidade-atendimento.component';

describe('UnidadeAtendimentoComponent', () => {
  let component: UnidadeAtendimentoComponent;
  let fixture: ComponentFixture<UnidadeAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
