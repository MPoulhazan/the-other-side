import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './../../../views/menu/menu.component';
import { FooterComponent } from './../../../views/footer/footer.component';


@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent,
      MenuComponent
   ]
})
export class AppModule { }
