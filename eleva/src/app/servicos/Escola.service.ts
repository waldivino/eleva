import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Escola } from '../models/Escola';
import { Turma } from '../models/Turma';
import { BaseService } from './Base.service';

@Injectable({
  providedIn: 'root',
})
export class EscolaService extends BaseService<Escola> {
  constructor(protected http: HttpClient) {
    super(http, 'escola');
  }

  listarTurmasPorEscola(escolaId: number): Observable<Turma[]> {
    return super.http.get<Turma[]>(super.url + escolaId);
  }
}
