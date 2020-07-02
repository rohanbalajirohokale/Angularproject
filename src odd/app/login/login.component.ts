import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { NgIf} from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  rohanInForm: FormGroup

  constructor(private router:Router,private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initrohaninForm();
  }
  initrohaninForm()
  {
    this.rohanInForm=this.FormBuilder.group(
      {
        username:['',[Validators.required,Validators.minLength(5)]],
        password:['',[Validators.required]]
      })
  }
     public str="";
     rout2()
 {
   if(this.rohanInForm.valid)
   {
     if(this.rohanInForm.controls.username.value === 'Admin' && this.rohanInForm.controls.password.value === 'pooja')
     {
       this.router.navigate(['/welcome'])
     }
    
  
  
     NgIf
     {
       this.str="Incorrect username& password";
     }
    
}
  }
}

  


