import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TopicListComponent } from './components/topics/topic-list/topic-list.component';
import { MfwTvComponent } from './components/mfw-tv/mfw-tv.component';
import { JoinComponent } from './components/join/join.component';
import { MfwMagComponent } from './components/mfw-mag/mfw-mag.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'topics/:topic',
    component: TopicListComponent
  },
  {
    path: "media",
    children: [
      {
        path: 'tv',
        component: MfwTvComponent
      },
      {
        path: 'mag',
        component: MfwMagComponent
      }
    ]
  },
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
