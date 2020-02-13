import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/data.json';

  getData(): Observable<any> {
    return this.http.get(this.configUrl).pipe(map(res => res || []),
      catchError(error => throwError(error.message || error))
    );
  }
}
