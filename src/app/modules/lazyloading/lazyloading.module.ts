import { NgIfNgforComponent } from './../../ng-if-ngfor/ng-if-ngfor.component';
import { SegundoComponenteComponent } from './../../segundo-componente/segundo-componente.component';
import { DataBindingComponent } from './../../data-binding/data-binding.component';
import { CrudComponent } from './../../componentes/crud/crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';


@NgModule({
  declarations: [
    CrudComponent,
    DataBindingComponent,
    SegundoComponenteComponent,
    NgIfNgforComponent
  ],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
