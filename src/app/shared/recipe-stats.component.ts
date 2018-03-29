import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../recipes/recipe';
import { RecipeCalcsUtil } from './recipecalcsutil';

@Component({
  selector: 'app-recipe-stats',
  templateUrl: './recipe-stats.component.html',
  styleUrls: ['./recipe-stats.component.css']
})
export class RecipeStatsComponent implements OnInit {

  @Input() recipe: IRecipe;

  OriginalGravity: number;
  FinalGravity: number;
  Color: number;
  Bitterness: number;
  AlcoholByVol: number;

  constructor() { }

  ngOnInit() {
    
    this.DoCalculations();

  }


  private DoCalculations(){
    let recipeCalcUtil = new RecipeCalcsUtil(this.recipe);
    this.OriginalGravity = recipeCalcUtil.OriginalGravity();
    this.FinalGravity = recipeCalcUtil.FinalGravity();
    this.Color = recipeCalcUtil.SRM();
    this.Bitterness = recipeCalcUtil.IBU();
    this.AlcoholByVol = recipeCalcUtil.ABV();

  }

}
