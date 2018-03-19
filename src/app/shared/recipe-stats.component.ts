import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../recipes/recipe';

@Component({
  selector: 'app-recipe-stats',
  templateUrl: './recipe-stats.component.html',
  styleUrls: ['./recipe-stats.component.css']
})
export class RecipeStatsComponent implements OnInit {

  @Input() recipe: IRecipe;

  constructor() { }

  ngOnInit() {
  }

}
