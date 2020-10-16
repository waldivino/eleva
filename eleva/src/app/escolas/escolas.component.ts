import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Escola } from '../models/Escola';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.scss']
})
export class EscolasComponent implements OnInit {

  constructor(private ec: FormBuilder) { 
    this.criarForm();
  }

  ngOnInit() {
  }
  public titulo = 'Escolas';

  public escolaSelecionada: Escola;

  public escolaForm: FormGroup;

  public escolas = [
    {id: 1, cnpj: '00.456.455/0001-05', nome: 'Escola Pensi', endereco: 'Rua Iaco, n 137'},
    {id: 2, cnpj: '00.456.455/0001-04', nome: 'Escola Elite', endereco: 'Rua Astro, n 5357'},
    {id: 3, cnpj: '00.456.455/0001-03', nome: 'Escola Ideal', endereco: 'Rua Combú, n 227'},
  ];

  escolaSelect(escola: Escola){
    this.escolaSelecionada = escola;
    this.escolaForm.patchValue(escola);
  }

  limpar(){
    this.escolaSelecionada = null;
  }

  criarForm(){
    this.escolaForm = this.ec.group({
      cnpj: ['', Validators.required],
      nome: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }

  escolaSubmit(){
    console.log(this.escolaForm.value);
  }

}
