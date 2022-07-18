import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';
import { ActionAnchorComponent } from './components/actionButtons/action-anchor/action-anchor.component';
import { ProductFocusComponent } from './screens/product-focus/product-focus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchScreenComponent,
    ActionAnchorComponent,
    ProductFocusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
