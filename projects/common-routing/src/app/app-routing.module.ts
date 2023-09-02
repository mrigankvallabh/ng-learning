import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResolveFn, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';

const resolveTitle: ResolveFn<string> = (route, state) => Promise.resolve(`Child A`);

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.title.setTitle(`MyApp | ${title}`);
    }
  }
}

const routes: Routes = [
  {
    path: 'first-component',
    title: 'First Component',
    component: FirstComponent,
    children: [
      { path: 'child-a', title: resolveTitle, component: ChildAComponent, },
      { path: 'child-b', title: 'Child B', component: ChildBComponent, },
    ]
  },
  {
    path: 'second-component',
    title: 'Second Component',
    component: SecondComponent,
  },
  { path: '', title: 'Home', component: FirstComponent, pathMatch: 'full' },
  { path: '**', title: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }]
})
export class AppRoutingModule { }
