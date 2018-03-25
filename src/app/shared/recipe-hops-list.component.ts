import { Component, OnInit, Input } from '@angular/core';
import { IHop } from '../recipes/hop';


@Component({
  selector: 'app-recipe-hops-list',
  templateUrl: './recipe-hops-list.component.html',
  styleUrls: ['./recipe-hops-list.component.css']
})
export class RecipeHopsListComponent implements OnInit {

  @Input() hops: IHop[];

  constructor() { }

  ngOnInit() {
  }

}
