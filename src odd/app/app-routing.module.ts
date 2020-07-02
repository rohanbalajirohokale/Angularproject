import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{path:'',redirectTo:'rohan',pathMatch:'full'},
{path:'welcome',component:WelcomeComponent},{path:'rohan',component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
