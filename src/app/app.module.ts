import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';
import { ActionAnchorComponent } from './components/actionButtons/action-anchor/action-anchor.component';
<<<<<<< HEAD
import { ProductFocusComponent } from './screens/product-focus/product-focus.component';
=======
import { DashboardHomeComponent } from './screens/user/dashboard-home/dashboard-home.component';
import { DashboardProductsComponent } from './screens/user/dashboard-products/dashboard-products.component';
import { DashboardRegisterComponent } from './screens/user/dashboard-register/dashboard-register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
>>>>>>> df9833c44228f46e1313667c9ea41a87670bb24a

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchScreenComponent,
    ActionAnchorComponent,
<<<<<<< HEAD
    ProductFocusComponent,
=======
    DashboardHomeComponent,
    DashboardProductsComponent,
    DashboardRegisterComponent,
    SidebarComponent,
>>>>>>> df9833c44228f46e1313667c9ea41a87670bb24a
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
