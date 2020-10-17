import { Turma } from './Turma';

export class Escola {
    // tslint:disable-next-line:ban-types
    id: Number;
    cnpj: string;
    nome: string;
    endereco: string;
    Turmas: Turma[];
}
