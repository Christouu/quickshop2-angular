import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MatBadgeModule, MatIconModule],
  exports: [NavigationComponent, FooterComponent],
})
export class CoreModule {}
