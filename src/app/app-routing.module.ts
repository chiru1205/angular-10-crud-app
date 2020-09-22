import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component' */;
import { RespondusComponent }  from './components/respondus/respondus.component'
import { ChallengeComponent }  from './components/challenge/challenge.component'
import { ExamComponent }  from './components/exam/exam.component'

const routes: Routes = [
  { path: '', redirectTo: 'respondus', pathMatch: 'full' },
  { path: 'respondus', component: RespondusComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'exam', component: ExamComponent }  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
