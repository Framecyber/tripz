import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  environment = {
    api: "http://122.8.149.40:8000"
  }
  constructor(private httpClient: HttpClient) { }

  imageToText(base64: string) {
    const baseURL = `${this.environment.api}/process`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/text',
      })
    };

    return this.httpClient.post(baseURL, base64, httpOptions).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

}
