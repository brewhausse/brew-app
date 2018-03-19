import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../recipes/recipe';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  @Input() recipe: IRecipe;

  constructor() { }

  ngOnInit() {
  }

}
