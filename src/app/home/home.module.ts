import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PollComponent } from './poll/poll.component';
import { LeaveplanComponent } from './leaveplan/leaveplan.component';
import { MeetingComponent } from './meeting/meeting.component';
import { VelocityComponent } from './velocity/velocity.component';
import { HappyComponent } from './happy/happy.component';

import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    PollComponent,
    LeaveplanComponent,
    MeetingComponent,
    VelocityComponent,
    HappyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatSliderModule
  ]
})
export class HomeModule { }
