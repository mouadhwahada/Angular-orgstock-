import { Component, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { CategoriesComponent } from './components/categories/categories.component';
import { SaveCategoryComponent } from './components/save-category/save-category.component';
import { UpdatePieceComponent } from './components/update-piece/update-piece.component';
import { PostcategoryComponent } from './components/postcategory/postcategory.component';
import { PostpiecesComponent } from './components/postpieces/postpieces.component';
import { AllpiecesComponent } from './components/allpieces/allpieces.component';
import { PieceChangelogComponent } from './components/piece-changelog/piece-changelog.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { InterventionHistoryComponent } from './components/intervention-history/intervention-history.component';
import { ShowinterventionsComponent } from './components/showinterventions/showinterventions.component';
import { PieceSaleComponent } from './components/piece-sale/piece-sale.component';
import { ShowSalesComponent } from './components/show-sales/show-sales.component';
import { CategoryChangelogComponent } from './components/category-changelog/category-changelog.component';
import { PieceSalesListComponent } from './components/piece-sales-list/piece-sales-list.component';
import { SoldPiecesComponent } from './components/sold-pieces/sold-pieces.component';
import { PieceLogComponent } from './components/piece-log/piece-log.component';
import { TreeHistoryComponent } from './components/tree-history/tree-history.component';
import { UpdateHistoryTreeComponent } from './components/update-history-tree/update-history-tree.component';
import { AllTemplateFrontComponent } from './FronOffice/all-template-front/all-template-front.component';
import { TreeHistoryupdateComponent } from './components/tree-historyupdate/tree-historyupdate.component';

export 
const routes: Routes = [
{path:"admin" , component:AllTemplateFrontComponent},

  //{path:'piece' , component:PostPieceComponent},

 // { path: 'addPiece', component: AddPieceComponent },
 //{path:'post', component:PostComponent},

 // { path: 'category', component: SaveCategoryComponent },

 {path:'change', component:PieceChangelogComponent},
 /*{ path: 'show-interventions', component: ShowinterventionsComponent }, // New one - 01/08/2024*/
 { path: 'piece-sales-list', component: PieceSalesListComponent },

 //Piece Sale 08/08/2024
 //{ path: 'piece-sale', component: PieceSaleComponent },
 //{ path: 'Show-sale', component: ShowSalesComponent },

 //{ path: 'sales-history', component: ShowSalesComponent },
 //{ path: 'sell-piece', component: PieceSaleComponent },

 { path: 'piece/:id', component: UpdatePieceComponent },
 { path: 'piece/:id/changelog', component: PieceLogComponent },
 

 // { path: 'pieces/search', component: Piece }, // Route pour rechercher des pièces
//  { path: 'pieces/update/:id', component: UpdatePieceComponent },




//Hadhouma done 


//{ path: 'update', component: UpdateHistoryTreeComponent },

{ path: 'sold-pieces', component: SoldPiecesComponent },

{ path: 'sales-by-client', component: PieceSaleComponent },

{ path: 'intervention-history', component: InterventionHistoryComponent },

{ path: 'show-intervention', component: ShowinterventionsComponent },
{ path: 'update-history-tree', component: TreeHistoryupdateComponent },

{ path: 'History-Tree', component: TreeHistoryComponent },

{ path: 'update/:clientCin/:purchaseNumber', component: UpdateHistoryTreeComponent },
{ path: 'update-piece/:pieceName', component: UpdatePieceComponent },

 { path: 'category', component: PostcategoryComponent },
 { path: 'pieces', component: AllpiecesComponent },
 {path:'post', component:PostpiecesComponent},
 { path: '', component: CategoriesComponent },
 { path: 'category/:id', component: UpdateCategoryComponent },
 { path: 'category/:id/log', component: CategoryChangelogComponent }
 
 
 /*{ path: 'piece/:id', component: UpdatePieceComponent },*/
 /*{ path: 'piece/:id/log', component: PieceChangelogComponent },*/


];
/*
@NgModule({
   declarations:[],
   imports:[HttpClientXsrfModule]
})*/