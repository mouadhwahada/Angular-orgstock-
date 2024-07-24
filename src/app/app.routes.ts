import { Component, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { CategoriesComponent } from './components/categories/categories.component';
import { SaveCategoryComponent } from './components/save-category/save-category.component';
import { HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AllPiecesComponent } from './components/all-pieces/all-pieces.component';
import { UpdatePieceComponent } from './components/update-piece/update-piece.component';
import { PostComponent } from './components/post/post.component';
import { PostcategoryComponent } from './components/postcategory/postcategory.component';
import { PostpiecesComponent } from './components/postpieces/postpieces.component';
import { AllpiecesComponent } from './components/allpieces/allpieces.component';
import { PieceChangelogComponent } from './components/piece-changelog/piece-changelog.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';

export 
const routes: Routes = [
  //{path:'piece' , component:PostPieceComponent},

 // { path: 'addPiece', component: AddPieceComponent },
 //{path:'post', component:PostComponent},

 // { path: 'category', component: SaveCategoryComponent },

 { path: 'category', component: PostcategoryComponent },
 {path:'change', component:PieceChangelogComponent},

 { path: 'pieces', component: AllpiecesComponent },
 {path:'post', component:PostpiecesComponent},

 { path: '', component: CategoriesComponent },
 { path: 'category/:id', component: UpdateCategoryComponent },

 { path: 'piece/:id', component: UpdatePieceComponent },
 { path: 'piece/:id/log', component: PieceChangelogComponent },


];
/*
@NgModule({
   declarations:[],
   imports:[HttpClientXsrfModule]
})*/