import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/expand';
import 'rxjs/add/observable/empty';

@Injectable()
export class WimpService {

    private baseUrl = 'http://localhost:8080/api/';

    apiUrl;
    found = false;

    constructor(private http: Http) { }

    getRecord(endpoint: string, id): Observable<object> {
        return this.http.get(`${this.baseUrl}${endpoint}/${id}`)
            .map(result => {
                return result.json();
            }
        );
    }

    getRecords(endpoint: string): Observable<any> {
        return this.http.get(`${this.baseUrl}${endpoint}`)
            .map(result => {
                return result.json();
            }
        );
    }

    addRecord(endpoint: string, record: object): Observable<any> {
        return this.http.post(`${this.baseUrl}${endpoint}`, record)
            .map(result => {
                return result.json();
            }
        );
    }

    deleteRecord(endpoint: string, id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}${endpoint}/${id}`)
            .map(result => {
                return result.json();
            }
        );
    }

    editRecord(endpoint: string, record: object, id: number): Observable<any> {
        return this.http.put(`${this.baseUrl}${endpoint}/${id}`, record)
            .map(result => {
                return result.json();
            }
        );
    }
}
