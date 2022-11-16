import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'',redirectTo:'addProduct',pathMatch:'full'},
  {path:'addProduct',component:FormComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:C1Component},
  {path:'test', component:TestComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
