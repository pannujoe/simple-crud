import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation'
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component';
import { NavbarComponent } from './nav/nav.component';

import { UserService } from './users/user.service';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule
                   ],
  declarations: [ AppComponent,
                          UserComponent,
                          NavbarComponent
                          ],
  providers: [ UserService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }