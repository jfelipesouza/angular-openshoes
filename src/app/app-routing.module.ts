import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';
import { ProductFocusComponent } from './screens/product-focus/product-focus.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchScreenComponent,
  },
  {
    path: 'product',
    component: ProductFocusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
