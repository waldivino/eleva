import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turma } from '../models/Turma';
import { BaseService } from './Base.service';

@Injectable({
  providedIn: 'root',
})
export class TurmaService extends BaseService<Turma> {
  constructor(protected http: HttpClient) {
    super(http, 'turma/');
  }
}
