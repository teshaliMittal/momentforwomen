import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { TopicListComponent } from './components/topics/topic-list/topic-list.component';
import { TopicDetailComponent } from './components/topics/topic-detail/topic-detail.component';
import { MfwTvComponent } from './components/mfw-tv/mfw-tv.component';
import { JoinComponent } from './components/join/join.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MfwMagComponent } from './components/mfw-mag/mfw-mag.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TopicListComponent,
    TopicDetailComponent,
    MfwTvComponent,
    JoinComponent,
    HeaderComponent,
    MfwMagComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
