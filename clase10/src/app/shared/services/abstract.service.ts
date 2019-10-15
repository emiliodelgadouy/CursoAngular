import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {delay, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from '@angular/material';

export class AbstractService<T> {
  public api_base = environment.api_base;
  public base;
  private entidades: T[];
  public entidades$: BehaviorSubject<T[]> = new BehaviorSubject([]);
  protected httpClient: HttpClient;
  private matSnackBar: MatSnackBar;


  constructor(httpClient: HttpClient, base: string, matSnackBar: MatSnackBar) {
    this.base = base;
    this.matSnackBar = matSnackBar;
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
    return this.httpClient.get<T>(this.api_base + '/' + this.base + '/' + id).pipe(
      delay(5000 * Math.random())
    );
  }

  public delete(id: number) {
    return this.httpClient.delete(this.api_base + '/' + this.base + '/' + id).pipe(
      delay(5000 * Math.random()),
      tap(result => {
        // @ts-ignore
        this.entidades = this.entidades.filter(e => e.id !== id);
        this.entidades$.next(this.entidades);
        this.openSnackBar('Se ha eliminado la entidad ' + id + ' de ' + this.base);
      })
    );
  }

  public save(entidad: any) {
    console.log(entidad);
    if (entidad.id) {
      return this.update(entidad, entidad.id);
    } else {
      return this.create(entidad);
    }

  }

  public create(entidad: any) {
    return this.httpClient.post<T>(this.api_base + '/' + this.base, entidad).pipe(
      delay(5000 * Math.random()),
      tap(result => {
        this.entidades.push(result);
        this.entidades$.next(this.entidades);
        // @ts-ignore
        this.openSnackBar('Se ha creado la entidad ' + result.id + ' de ' + this.base);
      })
    );
  }

  public update(entidad: T, id: number) {
    return this.httpClient.put<T>(this.api_base + '/' + this.base + '/' + id, entidad).pipe(
      delay(5000 * Math.random()),
      tap(result => {
        // @ts-ignore
        const index = this.entidades.findIndex(e => e.id === id);
        this.entidades = [...this.entidades.slice(0, index), result, ...this.entidades.slice(index + 1)];
        this.entidades$.next(this.entidades);
        this.openSnackBar('Se ha editado la entidad ' + id + ' de ' + this.base);
      })
    );
  }

  openSnackBar(message: string) {
    this.matSnackBar.open(message, 'Ok', {
      duration: 2000,
    });
  }
}
