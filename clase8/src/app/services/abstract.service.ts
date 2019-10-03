import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

export class AbstractService<T> {
  public api_base = environment.api_base;
  public base;
  private entidades: T[];
  public entidades$: BehaviorSubject<T[]> = new BehaviorSubject([]);
  protected httpClient: HttpClient;


  constructor(httpClient: HttpClient, base: string) {
    this.base = base;
    this.httpClient = httpClient;
    this.getAll().subscribe();
  }

  public getAll() {
    return this.httpClient.get<T[]>(this.api_base + '/' + this.base).pipe(
      tap(result => {
        this.entidades = result;
        this.entidades$.next(this.entidades);
      })
    );
  }

  public get(id: number) {
    return this.httpClient.get(this.api_base + '/' + this.base + '/' + id);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.api_base + '/' + this.base + '/' + id).pipe(
      tap(result => {
        this.entidades = this.entidades.filter(e => e.id !== id);
        this.entidades$.next(this.entidades);
      })
    );
  }

  public create(entidad: any) {
    return this.httpClient.post<T>(this.api_base + '/' + this.base, entidad).pipe(
      tap(result => {
        this.entidades.push(result);
        this.entidades$.next(this.entidades);
      })
    );
  }

  public update(entidad: T, id: number) {
    return this.httpClient.put<T>(this.api_base + '/' + this.base + '/' + id, entidad).pipe(
      tap(result => {
        const index = this.entidades.findIndex(e => e.id === id);
        this.entidades = [...this.entidades.slice(0, index), result, ...this.entidades.slice(index + 1)];
        this.entidades$.next(this.entidades);
      })
    );
  }
}
