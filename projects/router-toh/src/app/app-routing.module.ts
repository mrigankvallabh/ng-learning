import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'crisis-list', component: CrisisListComponent, },
  { path: 'heroes-list', component: HeroesListComponent, },
  {
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/@[\w]+$/gm)) {
        return {
          consumed: url,
          posParams: { username: new UrlSegment(url[0].path.slice(1), {}) }
        }
      }
      return null;
    },
    component: ProfileComponent
  },
  { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
