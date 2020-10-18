import { Turma } from './Turma';

export class Escola {
    id: number;
    cnpj: string;
    nome: string;
    endereco: string;
    Turmas: Turma[];
}
