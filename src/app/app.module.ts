import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ListproductComponent } from './crudProduct/listproduct/listproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailproductComponent } from './crudProduct/detailproduct/detailproduct.component';
import { AddproductComponent } from './crudProduct/addproduct/addproduct.component';
import { UpdateproductComponent } from './crudProduct/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './crudProduct/deleteproduct/deleteproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    TestComponent,
    Test2Component,
    NotfoundComponent,
    LoginComponent,
    NavComponent,
    FormComponent,
    Service1Component,
    Service2Component,
    OffresEmploiComponent,
    ListproductComponent,
    DetailproductComponent,
    AddproductComponent,
    UpdateproductComponent,
    DeleteproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
