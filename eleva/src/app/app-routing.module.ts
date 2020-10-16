import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolasComponent } from './escolas/escolas.component';
import { TurmasComponent } from './turmas/turmas.component';

const routes: Routes = [
  { path: 'escolas', component: EscolasComponent},
  { path: 'turmas', component: TurmasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
