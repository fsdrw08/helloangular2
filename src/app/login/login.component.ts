import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../core/auth.service'; 
import { CommonModule } from '@angular/common';

//
//    
//
@Component({
  selector: 'app-login',
  template: `
<div>
  <form #formRef="ngForm"
    (ngSubmit)="onSubmit(formRef.value)"
  >
  <fieldset ngModel="login">
  <input type="text"
    name="username"
    [(ngModel)]="username"
    #usernameRef="ngModel"
    required
    minlength="3"
    placeholder="uaername"
  />
<div *ngIf="usernameRef.errors?.required">this is required</div>
<div *ngIf="usernameRef.errors?.minlength">minlength </div>


 <input type="password"
    name="password"
    [(ngModel)]="password"
    #passwordRef="ngModel"
    required
    placeholder="password"
  />
<div *ngIf="passwordRef.errors?.required">this is required</div>

  <button type="Submit">login</button>
  </fieldset>
  </form>
  <div>{{submit}}</div>
</div>
  `,
  styles: [`
   input.ng-invalid{ 
      border: 3px solid red; 
    } 
    input.ng-valid{ 
      border: 3px solid green; 
    }
  `],
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  submit:any;
  constructor(private service: AuthService
    //@Inject(AuthService) private service
  ) { 
    //this.service = new AuthService();
  }

  ngOnInit() {
  }

  /*onClick(username, password){
    console.log( 'auth result is:'
      + this.service.loginWithCredentials(username, password) 
 ); 
  }*/
  onSubmit(formValue){
    console.log(formValue);
    this.submit = console.log('auth result is:'
      + this.service.loginWithCredentials(formValue.login.username, formValue.login.password));
  }
}
