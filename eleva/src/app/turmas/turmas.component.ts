import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Turma } from '../models/Turma';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.scss']
})
export class TurmasComponent implements OnInit {

  constructor(private tc: FormBuilder) { 
    this.criarForm();
  }

  ngOnInit() {
  }

  public titulo = 'Turmas';

  public turmaSelecionada: Turma;

  public turmaForm: FormGroup;

  public turmas = [
  {id: 1, escola: 'Pensi', turma:'P-101', periodo: 'manhã'},
  {id: 2, escola: 'Pensi', turma:'P-102', periodo: 'manhã'},
  {id: 3, escola: 'Elite', turma:'P-103', periodo: 'tarde'},
  {id: 4, escola: 'Elite', turma:'P-104', periodo: 'tarde'},
  ];

  turmaSelect(turma: Turma){
    this.turmaSelecionada = turma;
    this.turmaForm.patchValue(turma);
  }

  limpar(){
    this.turmaSelecionada = null;
  }

  criarForm(){
    this.turmaForm = this.tc.group({
      escola: ['', Validators.required],
      turma: ['', Validators.required],
      periodo: ['', Validators.required]
    });
  }

  turmaSubmit(){
    console.log(this.turmaForm.value);
  }

}
