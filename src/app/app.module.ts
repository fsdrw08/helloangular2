import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { routing } from './app.routes';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    //CommonModule,
    HttpClientModule,
    routing,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
