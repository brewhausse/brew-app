import { Component, OnInit, Input } from '@angular/core';
import { IYeast } from '../recipes/yeast';

@Component({
  selector: 'app-recipe-yeast-list',
  templateUrl: './recipe-yeast-list.component.html',
  styleUrls: ['./recipe-yeast-list.component.css']
})
export class RecipeYeastListComponent implements OnInit {

  @Input() yeasts: IYeast[];
  @Input() isEditable: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
