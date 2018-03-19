import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { IRecipe } from "./recipe";

@Component({
    templateUrl: './recipe-list.component.html',
    providers: [RecipeService]
})
export class RecipeListComponent implements OnInit{

    constructor(private _recipeSvc: RecipeService){}

    pageTitle: string = "Recipes";

    filteredRecipes: IRecipe[];
    recipes: IRecipe[];
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredRecipes = this.listFilter.length > 0 ? this.getFilteredList(this.listFilter): this.recipes;
    }
    

    ngOnInit(): void{
        this._recipeSvc.getRecipes()
            .subscribe(
                recipes => {
                    this.recipes = recipes;
                    this.filteredRecipes = this.recipes;
                },
                error => this.errorMessage = <any>error);
    }

    getFilteredList(filterBy: string):IRecipe[]{
        filterBy = filterBy.toLocaleLowerCase();

        return this.recipes.filter((recipe: IRecipe) => 
            recipe.Title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}