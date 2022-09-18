import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './answer/answer.component';
import { QstnComponent } from './qstn/qstn.component';

const routes: Routes = [
  { path:'',component:QstnComponent},
  {path:'answer',component:AnswerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
