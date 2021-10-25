import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomelazyComponent } from './componentes/homelazy/homelazy.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgIfNgforComponent } from './ng-if-ngfor/ng-if-ngfor.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

const routes: Routes = [
  {path: 'lazy', loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(m => m.LazyloadingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
