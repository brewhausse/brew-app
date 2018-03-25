import { Component, OnInit, Input } from '@angular/core';
import { IFermentable } from '../recipes/fermentable';

@Component({
  selector: 'app-recipe-fermentables-list',
  templateUrl: './recipe-fermentables-list.component.html',
  styleUrls: ['./recipe-fermentables-list.component.css']
})
export class RecipeFermentablesListComponent implements OnInit {

  @Input() fermentables: IFermentable[];

  constructor() { }

  ngOnInit() {
  }

}
