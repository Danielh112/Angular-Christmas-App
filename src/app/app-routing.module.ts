import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { CountdownComponent } from './countdown/countdown.component';
import { SecurityQuestionsComponent } from './security-questions/security-questions.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'home'}},
  { path: 'countdown', component: CountdownComponent },
  { path: 'security-questions', component: SecurityQuestionsComponent },
  { path: 'present', component: SlideshowComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
