import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  pageTitle: string = 'Recipe Detail';
  @Input() recipe: IRecipe;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _recipeSvc: RecipeService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');

    this.pageTitle += `: ${id}`;
    this._recipeSvc.getRecipe(id)
      .subscribe((recipe: IRecipe) => this.recipe = recipe);
  }

  onBack(): void {
    this._router.navigate(['/recipes']);
  }

}
