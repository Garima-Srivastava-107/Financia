import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupName, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
loginForm:any;
registerForm:any;
activeForm: 'login'|'register'='login';
constructor(private fb:FormBuilder,private router:Router,private snackBar:MatSnackBar){}
ngOnInit(): void {
  this.loginForm=this.fb.group(
    {
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    }
  );
  this.registerForm=this.fb.group({
    username:['',Validators.required],
    email:['',Validators.required,Validators.email],
    password:['',Validators.required]
});
}
login(){
if(this.loginForm.valid){
  console.log("Login info=>",this.loginForm.value);
  this.router.navigate(['/financia/dashboard']);
}
  else{
    this.snackBar.open('Invalid email or password!','Close',{duration:3000});
  }
}

toggleForm(form:'login'|'register'){
this.activeForm=form;
}
register(){
  if(this.registerForm.valid){
    console.log("Register info==>>",this.registerForm.value);
    setTimeout(()=>{
      window.location.reload();
    },2000);
    this.router.navigate(['/financia/login']);
  }
  else{
    this.snackBar.open('Please fill in all field correctly','Close',{duration:3000});
  }
}
}
