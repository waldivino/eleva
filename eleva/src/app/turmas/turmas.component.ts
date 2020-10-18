import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Turma } from '../models/Turma';
import { TurmaService } from '../servicos/Turma.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.scss']
})
export class TurmasComponent implements OnInit {

  public titulo = 'Turmas';
  public turmaSelecionada: Turma;
  public turmaForm: FormGroup;
  modalRef: BsModalRef;
  public turmaPostForm: FormGroup;

  constructor(private tc: FormBuilder, private modalService: BsModalService, private turmaService: TurmaService) {
    this.criarForm();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.carregaTurma();
  }

  // tslint:disable-next-line:member-ordering
  public turmas: Turma[];

  // tslint:disable-next-line:typedef
  turmaSelect(turma: Turma){
    this.turmaSelecionada = turma;
    this.turmaForm.patchValue(turma);
    this.turmaPostForm.patchValue(turma);
  }

  // tslint:disable-next-line:typedef
  limpar(){
    this.turmaSelecionada = null;
  }

  // tslint:disable-next-line:typedef
  criarForm(){
    this.turmaForm = this.tc.group({
      id: [''],
      escola: ['', Validators.required],
      turma: ['', Validators.required],
      periodo: ['', Validators.required]
    });

    this.turmaPostForm = this.tc.group({
      id: [''],
      escola: ['', Validators.required],
      turma: ['', Validators.required],
      periodo: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

// tslint:disable-next-line:typedef
carregaTurma(){
  this.turmaService.listar().subscribe(
    (turmas: Turma[]) => {
      this.turmas = turmas;
    },
    (erro: any) => {
      console.error(erro);
    }
  );
}

// tslint:disable-next-line:typedef
turmaSubmit(){
  this.salvarTurma(this.turmaPostForm.value);
}

// tslint:disable-next-line:typedef
atualizaSubmit(){
  this.atualizarTurma(this.turmaForm.value.id, this.turmaForm.value);
}

// tslint:disable-next-line:typedef
deletarSubmit(){
  this.deletarTurma(this.turmaForm.value.id);
}

// tslint:disable-next-line:typedef
salvarTurma(turma: Turma){
  this.turmaService.post(turma).subscribe(
    // tslint:disable-next-line:no-shadowed-variable
    (turma: Turma) => {
      console.log(turma);
      this.carregaTurma();
    },
    (erro: any) => {
      console.error(erro);
    }
  );
  this.modalRef.hide();
}

// tslint:disable-next-line:typedef
atualizarTurma(id: number, turma: Turma){
  this.turmaService.put(id, turma).subscribe(
    // tslint:disable-next-line:no-shadowed-variable
    (turma: Turma) => {
      console.log(turma);
      this.carregaTurma();
    },
    (erro: any) => {
      console.error(erro);
    }
  );
  this.modalRef.hide();
}

// tslint:disable-next-line:typedef
deletarTurma(id: number){
  this.turmaService.delete(id).subscribe(
    // tslint:disable-next-line:no-shadowed-variable
    (turma: Turma) => {
      console.log(turma);
      this.carregaTurma();
    },
    (erro: any) => {
      console.error(erro);
    }
  );
}

}
