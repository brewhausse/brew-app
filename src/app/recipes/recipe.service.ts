import { Injectable } from "@angular/core";
import { IRecipe } from "./recipe";
import { IHop } from "./hop";
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IFermentable } from "./fermentable";
import { IYeast } from "./yeast";

@Injectable()
export class RecipeService{
    // private _recipeUrl: string = './api/recipes/recipes.json';
    private _recipeUrl: string = environment.apiBase + '/api/recipes';

    constructor(private _http: HttpClient){
        console.log('Base Api: ' + environment.apiBase);
    }

    public getRecipes(): Observable<IRecipe[]>{
        return this._http.get(this._recipeUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .map((data: any) => {
                let recipes: IRecipe[] = [];
                data.forEach(r => {
                    let hops: IHop[] = [];
                    r.hops.forEach(h => {
                        let hop: IHop = {
                            Id: h.hopId,
                            Title: h.hopTitle,
                            Oz: h.oz,
                            Type: h.type,
                            Usage: h.usage,
                            TimeMin: h.time,
                            AlphaAcid: h.alphaAcid,
                            IBU: h.IBU
                        }

                        hops.push(hop);
                    });

                    let fermentables: IFermentable[] = [];
                    r.fermentables.forEach(f => {
                        let fermentable: IFermentable = {
                            Id: f.fermentableId,
                            Title: f.fermentableTitle,
                            GrainPotential: f.grainPotential,
                            Lovibond: f.lovibond,
                            Lbs: f.lbs,
                            Usage: f.usage
                        }

                        fermentables.push(fermentable);
                    });

                    let yeasts: IYeast[] = [];
                    r.yeasts.forEach(y => {
                        let yeast: IYeast = {
                            Id: y.yeastId,
                            Name: y.name,
                            Attenuation: y.attenuation
                        }

                        yeasts.push(yeast);
                    });

                    let recipe: IRecipe = {
                        Id: r.recipeId,
                        Title: r.recipeTitle,
                        BatchSize: r.batchSize,
                        BoilSizeGal: r.boilSize,
                        BoilTimeMin: r.boilTime,
                        MashEfficiency: r.mashEfficiency,
                        Fermentables: fermentables,
                        Hops: hops,
                        Yeasts: yeasts
                    };

                    recipes.push(recipe);
                });
                return recipes;
            })
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