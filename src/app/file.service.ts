import { Injectable } from '@angular/core';
import { File } from './model/file';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class FileService {
  private filesUrl='api/files';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string){
    this.messageService.add('FileService: '+ message);
  }

  getFiles(): Observable<File[]> {
    this.messageService.add('Ostatnia aktualizacja:'+ Date.now);
    return this.http.get<File[]>(this.filesUrl)
    .pipe(
      tap(files => this.log('pobrano pliki')),
      catchError(this.handleError('getFiles', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error : any): Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');

      return of(result as T);
    }
  }
}

