import { FooterComponent } from './../../componentes/footer/footer.component';
import { HeaderComponent } from './../../componentes/header/header.component';
import { HomelazyComponent } from './../../componentes/homelazy/homelazy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from 'src/app/data-binding/data-binding.component';
import { SegundoComponenteComponent } from 'src/app/segundo-componente/segundo-componente.component';
import { NgIfNgforComponent } from 'src/app/ng-if-ngfor/ng-if-ngfor.component';
import { CrudComponent } from 'src/app/componentes/crud/crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomelazyComponent,
    children: [
      { path: 'header', component: HeaderComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'primeirocomponente', component: DataBindingComponent },
      { path: 'segundocomponente', component: SegundoComponenteComponent },
      { path: 'ngifngfor', component: NgIfNgforComponent },
      { path: 'crud', component: CrudComponent },
    ]
  }
];

@NgModule({
  declarations: [HomelazyComponent, HeaderComponent, FooterComponent],
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
