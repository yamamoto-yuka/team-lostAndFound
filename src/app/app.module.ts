import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { LostInputComponent } from './lost-input/lost-input.component';
import { FoundInputComponent } from './found-input/found-input.component';
<<<<<<< Updated upstream
=======
import { LostEditComponent } from './lost-edit/lost-edit.component';
import { MainHeaderComponent } from './main-header/main-header.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    PostdetailsComponent,
    LostInputComponent,
    FoundInputComponent,
<<<<<<< Updated upstream
=======
    LostEditComponent,
    MainHeaderComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
