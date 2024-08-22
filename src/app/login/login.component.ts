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

  // onSubmit(){
  //   this.router.navigate(['/register']);
  // }

}


