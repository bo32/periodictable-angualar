import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  
  getOneElement(elementName) {
    return this.http.get('/api/elements/' + elementName).map((response: Response) => response.json());
  }

  getTable() {
    return this.http.get('/api/table').map((response: Response) => response.json());
  }

  getTablePerPeriods() {
    return this.http.get('/api/table/periods').map((response: Response) => response.json());
  }

  getGroups() {
    return this.http.get('/api/groups').map((response: Response) => response.json());
  }

  getElementByGroupIdAndPeriodId(groupId, periodId) {
    var url = '/api/elements?groupId=' + groupId + '&periodId=' + periodId;
    return this.http.get(url).map((response: Response) => response.json());
  }


}
