import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient){}
    url:string='./assets/data.json';
    getAll() {
        return this.http.get<any>(`${this.url}`);
    }
}