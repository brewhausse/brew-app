import { Injectable } from "@angular/core";
import { IRecipe } from "./recipe";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService{
    private _recipeUrl: string = './api/recipes/recipes.json';

    constructor(private _http: HttpClient){}

    public getRecipes(): Observable<IRecipe[]>{
        return this._http.get<IRecipe[]>(this._recipeUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    public getRecipe(id:number): Observable<IRecipe>{
        return this.getRecipes()
            .map((recipes: IRecipe[]) => recipes.find( r => r.Id === id));
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}