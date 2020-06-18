import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  getUrl(): string{
    return 'http://localhost:8080/excaliber/';
  }

  initializeData(): Observable<HttpResponse<any>> {
    return this.http.get(this.getUrl() + 'JSONController/', { observe: 'response'}).pipe(
      map(resp => resp as HttpResponse<any>)
    );
  }

}