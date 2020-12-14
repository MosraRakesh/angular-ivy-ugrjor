import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactsTopBarComponent } from './contacts-top-bar/contacts-top-bar.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule],
  declarations: [ AppComponent, HelloComponent, ContactsTopBarComponent, ContactsListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
