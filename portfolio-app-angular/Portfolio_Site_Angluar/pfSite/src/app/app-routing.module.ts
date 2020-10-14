import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EduSkillsComponent} from './edu-skills/edu-skills.component';
import {ExtraExperienceComponent} from './extra-experience/extra-experience.component';
import {ReferencesComponent} from './references/references.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'edu-skills', component: EduSkillsComponent},
  {path: 'extra-experience', component: ExtraExperienceComponent},
  {path: 'references', component: ReferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
