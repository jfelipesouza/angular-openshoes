import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionAnchorComponent } from './components/action-buttons/action-anchor/action-anchor.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ActionAnchorComponent, ProductCardComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ActionAnchorComponent, ProductCardComponent],
})
export class SharedModule {}
