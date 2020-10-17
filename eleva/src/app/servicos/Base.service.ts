import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService<TModelo> {
  protected url: string;

  constructor(protected http: HttpClient, protected controller: string) {
    this.url = environment.url + controller + '/';
  }

  listar(): Observable<TModelo[]> {
    return this.http.get<TModelo[]>(this.url);
  }

  cadastrar(tModelo: TModelo): void {
    this.http.post(this.url, tModelo);
  }

  atualizar(id: number, tModelo: TModelo): void {
    this.http.put(this.url + id, tModelo);
  }

  deletar(id: number): void {
    this.http.post(this.url, id);
  }
}
