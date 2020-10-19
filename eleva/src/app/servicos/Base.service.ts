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

  listarTurmasPorEscola(escolaId: number): Observable<any[]> {
    return this.http.get<TModelo[]>(this.url + escolaId);
  }

  post(tModelo: TModelo): Observable<TModelo>  {
    return this.http.post<TModelo>(this.url, tModelo);
  }

  put(id: number, tModelo: TModelo): Observable<TModelo>  {
    return this.http.put<TModelo>(this.url + id, tModelo);
  }

  delete(id: number): Observable<TModelo> {
    return this.http.delete<TModelo>(this.url + id);
  }
}
