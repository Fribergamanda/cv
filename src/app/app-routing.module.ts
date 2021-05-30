import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilderComponent } from './views/bilder/bilder.component';
import { CvComponent } from './views/cv/cv.component';
import { KontaktComponent } from './views/kontakt/kontakt.component';
import { StartsidaComponent } from './views/startsida/startsida.component';

const routes: Routes = [
  {path: '', component: StartsidaComponent},
  {path: 'cv', component: CvComponent},
  {path: 'bilder', component: BilderComponent},
  {path: 'kontakt', component: KontaktComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
