import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail.component'
import { WelcomeComponent } from './home/welcome.component';
import { BatchListComponent } from './batches/batch-list.component';
import { BatchDetailComponent } from './batches/batch-detail.component';
import { BatchRecipeComponent } from './batches/batch-recipe.component';
import { BatchBrewdayComponent } from './batches/batch-brewday.component';
import { BatchFermentationComponent } from './batches/batch-fermentation.component';
import { BatchBottlingComponent } from './batches/batch-bottling.component';
import { RecipeFermentablesListComponent } from './shared/recipe-fermentables-list.component';
import { RecipeHopsListComponent } from './shared/recipe-hops-list.component';
import { RecipeYeastListComponent } from './shared/recipe-yeast-list.component';
import { RecipeInfoComponent } from './shared/recipe-info.component';
import { RecipeStatsComponent } from './shared/recipe-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    WelcomeComponent,
    BatchDetailComponent,
    BatchListComponent,
    BatchRecipeComponent,
    BatchBrewdayComponent,
    BatchFermentationComponent,
    BatchBottlingComponent,
    RecipeFermentablesListComponent,
    RecipeHopsListComponent,
    RecipeYeastListComponent,
    RecipeInfoComponent,
    RecipeStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'recipes', component: RecipeListComponent},
      {path: 'recipes/:id', component: RecipeDetailComponent},
      {path: 'batches', component: BatchListComponent},
      {path: 'batches/:id', component: BatchDetailComponent, 
        children: [
          {path: '', redirectTo: 'recipe', pathMatch: 'full'},
          {path: 'recipe', component: BatchRecipeComponent},
          {path: 'brewday', component: BatchBrewdayComponent},
          {path: 'fermentation', component: BatchFermentationComponent},
          {path: 'bottling', component: BatchBottlingComponent}
        ]
      },
      {path: 'welcome', component: WelcomeComponent},
      {path: '**', component: WelcomeComponent}
    ])
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
