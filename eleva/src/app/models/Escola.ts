import { Turma } from './Turma';

export class Escola {
    id: Number;
    cnpj: string;
    nome: string;
    endereco: string;
    turmas: Turma[];
}
