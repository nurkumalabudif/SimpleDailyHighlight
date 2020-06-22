import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule, NbIconModule, NbCheckboxModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { StepperComponent } from './stepper/stepper.component';
import { NewsService } from './news.service';
import { TodoService } from './todolist.service';
import { ListComponent } from './list/list.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
    NbIconModule,
    NbCheckboxModule
  ],
  declarations: [
    LayoutComponent,
    StepperComponent,
    ListComponent,
  ],
  providers: [
    NewsService,
    TodoService
  ],
})
export class LayoutModule { }
