import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ComponentsModule,
    BrowserAnimationsModule,
    PagesModule,
    BrowserAnimationsModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
