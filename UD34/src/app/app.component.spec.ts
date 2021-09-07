import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})

export class AppModule {
  title = "Calculadora";
  num:number = 0;
  resul:number = 0;

  Suma():void{
    this.resul = this.num + this.num;
  }
}



