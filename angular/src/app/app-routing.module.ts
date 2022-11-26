import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path:'products',
    component: ProductsComponent
  },
  {
    path:'emploi',
    component: OffresEmploiComponent
  },
  {
    path:'listeArticles',
    component: ArticlesComponent
  },
  {
    path:'addProduct',
    component: AddProductComponent
  },
  {
    path:'command',
    component: TemplateDrivenFormComponent
  },
  {
    path:'',redirectTo:'products',
    pathMatch:'full'
  },
  {path:'**', component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
