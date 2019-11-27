import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormularioComponent} from './componentes/formulario/formulario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import {UnidadeAtendimentoComponent} from './componentes/unidade-atendimento/unidade-atendimento.component';
import {TelaLoginComponent} from './componentes/tela-login/tela-login.component';
import {CadastroComponent} from './componentes/cadastro/cadastro.component'
  
const routes: Routes = [
  {path: '', component: TelaLoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'formulario', component: FormularioComponent },
  {path: 'unidade-atendimento', component: UnidadeAtendimentoComponent },
  {path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
