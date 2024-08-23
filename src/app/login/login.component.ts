import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }
  email:string = "";
  password:string = "";


  print(){
    console.log(this.email + this.password);
  }

  onSubmit(){
    if(this.email=="abcd@gmail.com" && this.password=="12345678")
    this.router.navigate(['/home']);
  }
  // onSubmit(){
  //   this.router.navigate(['/register']);
  // }

}


