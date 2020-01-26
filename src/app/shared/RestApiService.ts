import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ParcelType } from '../models/ParcelType';
import { Injectable } from '@angular/core';
import { Parcel } from '../models/Parcel';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getParcelTypes(): Observable<ParcelType[]> {
    return this.http.get<ParcelType[]>(this.apiURL + '/parceltypes')
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  createParcel(value): Observable<Parcel> {
    return this.http.post<Parcel>(this.apiURL + '/parcel', JSON.stringify(value), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
