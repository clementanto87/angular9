import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HappyComponent } from './home/happy/happy.component';
import { LeaveplanComponent } from './home/leaveplan/leaveplan.component';
import { MeetingComponent } from './home/meeting/meeting.component';
import { PollComponent } from './home/poll/poll.component';
import { VelocityComponent } from './home/velocity/velocity.component';

const routes: Routes = [{
  path: "poll",
  component: PollComponent
}, {
  path: 'meeting',
  component: MeetingComponent
}, {
  path: "velocity",
  component: VelocityComponent
}, {
  path: "happy",
  component: HappyComponent
}, {
  path: "leave",
  component: LeaveplanComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
