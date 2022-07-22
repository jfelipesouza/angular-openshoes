import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionAnchorComponent } from './components/action-buttons/action-anchor/action-anchor.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ActionAnchorComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ActionAnchorComponent],
})
export class SharedModule {}
