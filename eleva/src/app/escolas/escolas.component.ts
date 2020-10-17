import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Escola } from '../models/Escola';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.scss']
})
export class EscolasComponent implements OnInit {

  public titulo = 'Escolas';
  public escolaSelecionada: Escola;
  public escolaForm: FormGroup;
  modalRef: BsModalRef;

  public escolas = [
    {id: 1, cnpj: '00.456.455/0001-05', nome: 'Escola Pensi', endereco: 'Rua Iaco, n 137'},
    {id: 2, cnpj: '00.456.455/0001-04', nome: 'Escola Elite', endereco: 'Rua Astro, n 5357'},
    {id: 3, cnpj: '00.456.455/0001-03', nome: 'Escola Ideal', endereco: 'Rua Combú, n 227'},
  ];

  constructor(private ec: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  escolaSelect(escola: Escola){
    this.escolaSelecionada = escola;
    this.escolaForm.patchValue(escola);
  }

  // tslint:disable-next-line:typedef
  limpar(){
    this.escolaSelecionada = null;
  }

  // tslint:disable-next-line:typedef
  criarForm(){
    this.escolaForm = this.ec.group({
      cnpj: ['', Validators.required],
      nome: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  escolaSubmit(){
    console.log(this.escolaForm.value);
  }

  // tslint:disable-next-line:typedef
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
