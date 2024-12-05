import { Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { MovieComponent } from './pages/movie/movie.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { CategoryCreateComponent } from './pages/category-create/category-create.component';
import { MovieCreateComponent } from './pages/movie-create/movie-create.component';
import { MovieEditComponent } from './pages/movie-edit/movie-edit.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'category/:id',
    component: CategoryDetailsComponent,
  },
  {
    path: 'category/:id/edit',
    component: CategoryEditComponent,
  },
  {
    path: 'category-create',
    component: CategoryCreateComponent,
  },
  {
    path: 'movie',
    component: MovieComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'movie/:id/edit',
    component: MovieEditComponent,
  },
  {
    path: 'movie-create',
    component: MovieCreateComponent,
  },
];
