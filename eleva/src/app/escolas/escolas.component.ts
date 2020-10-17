import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Escola } from '../models/Escola';
import { EscolaService } from '../servicos/Escola.service';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.scss']
})
export class EscolasComponent implements OnInit {

  public titulo = 'Escolas';
  public escolaSelecionada: Escola;
  public escolaForm: FormGroup;
  public escolaPostForm: FormGroup;
  modalRef: BsModalRef;

  constructor(private ec: FormBuilder, private modalService: BsModalService, private escolaService: EscolaService) {
    this.criarForm();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.carregaEscola();
  }

  // tslint:disable-next-line:member-ordering
  public escolas: Escola[];

  // tslint:disable-next-line:typedef
  escolaSelect(escola: Escola){
    this.escolaSelecionada = escola;
    this.escolaForm.patchValue(escola);
    this.escolaPostForm.patchValue(escola);
  }

  // tslint:disable-next-line:typedef
  limpar(){
    this.escolaSelecionada = null;
  }

  // tslint:disable-next-line:typedef
  criarForm(){
    this.escolaForm = this.ec.group({
      id: [''],
      cnpj: ['', Validators.required],
      nome: ['', Validators.required],
      endereco: ['', Validators.required]
    });

    this.escolaPostForm = this.ec.group({
      cnpj: ['', Validators.required],
      nome: ['', Validators.required],
      endereco: ['', Validators.required]
    });

  }

  // tslint:disable-next-line:typedef
  carregaEscola(){
    this.escolaService.listar().subscribe(
      (escolas: Escola[]) => {
        this.escolas = escolas;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  // tslint:disable-next-line:typedef
  escolaSubmit(){
    this.salvarEscola(this.escolaPostForm.value);
  }

  // tslint:disable-next-line:typedef
  atualizaSubmit(){
    this.atualizarEscola(this.escolaForm.value.id, this.escolaForm.value);
  }

  // tslint:disable-next-line:typedef
  deletarSubmit(){
    this.deletarEscola(this.escolaForm.value.id);
  }

  // tslint:disable-next-line:typedef
  salvarEscola(escola: Escola){
    this.escolaService.post(escola).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      (escola: Escola) => {
        console.log(escola);
        this.carregaEscola();
      },
      (erro: any) => {
        console.error(erro);
      }
    );
    this.modalRef.hide();
  }

  // tslint:disable-next-line:typedef
  atualizarEscola(id: number, escola: Escola){
    this.escolaService.put(id, escola).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      (escola: Escola) => {
        console.log(escola);
        this.carregaEscola();
      },
      (erro: any) => {
        console.error(erro);
      }
    );
    this.modalRef.hide();
  }

  // tslint:disable-next-line:typedef
  deletarEscola(id: number){
    this.escolaService.delete(id).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      (escola: Escola) => {
        console.log(escola);
        this.carregaEscola();
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  // tslint:disable-next-line:typedef
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
