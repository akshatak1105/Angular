import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbserviceService {
  constructor(private _http: HttpClient) {}

  //connectUrl
  connectUrl = 'http://localhost:8080/api/database/connect';


  // Headers
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  params = new HttpParams()
//"http://localhost:8080/api/database/connect?url=jdbc:mysql://localhost:3306/maiara_tech?user=root%2526password=@kshata1105.02"

  // Connect method
  connect(requestData: any): Observable<any> {
    this.params = this.params.set('url', requestData);
    const options = { headers: this.headers, params: this.params };

    return this._http.post(this.connectUrl, requestData, options);

  }


  //execute method

}
