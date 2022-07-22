import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';
import { DashboardHomeComponent } from './screens/user/dashboard-home/dashboard-home.component';
import { DashboardProductsComponent } from './screens/user/dashboard-products/dashboard-products.component';
import { DashboardRegisterComponent } from './screens/user/dashboard-register/dashboard-register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SingInComponent } from './screens/sing-in/sing-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchScreenComponent,
    DashboardHomeComponent,
    DashboardProductsComponent,
    DashboardRegisterComponent,
    SidebarComponent,
    SingInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
