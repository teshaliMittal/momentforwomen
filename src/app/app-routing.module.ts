import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TopicListComponent } from './components/topics/topic-list/topic-list.component';
import { AppComponent } from './app.component';
import { MfwTvComponent } from './components/mfw-tv/mfw-tv.component';
import { JoinComponent } from './components/join/join.component';

const routes: Routes = [
 
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'topics/:topic',
    component: TopicListComponent
  },
  {
    path: 'tv',
    component: MfwTvComponent
  },
  {
    path: 'join',
    component: JoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
