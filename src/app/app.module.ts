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
import { LostEditComponent } from './lost-edit/lost-edit.component';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    PostdetailsComponent,
    LostInputComponent,
    FoundInputComponent,
    LostEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CloudinaryModule.forRoot({Cloudinary},
    { cloud_name: 'your_cloud_name' } as CloudinaryConfiguration),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
