import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
hostUrl: string;
  constructor(
    private http: HttpClient
  ) { }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(err);
  }
  getArticles(topic): Observable<any>{
    let url = "localhost:5001/topic/"+topic;
    return this.http.get<any>(url).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
