import { Injectable } from "@angular/core";
import { IBatch } from "./batch";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BatchService{
    private _batchUrl: string = './api/batches/batches.json';

    constructor(private _http: HttpClient){}

    public getBatches(): Observable<IBatch[]>{
        return this._http.get<IBatch[]>(this._batchUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}