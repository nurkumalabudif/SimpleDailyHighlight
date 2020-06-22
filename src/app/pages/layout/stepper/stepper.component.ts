import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbStepperComponent } from '@nebular/theme';
import { TodoService } from '../todolist.service'
import { ToastrService } from '../../../_services/toastr.service';

@Component({
  selector: 'ngx-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.scss'],
})
export class StepperComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  arrDataTodolist:any = [];
  firstCtrl: any;
  secondCtrl: any;
  @ViewChild('stepper') stepperComponent: NbStepperComponent;

  constructor(
    private fb: FormBuilder,  
    private service : TodoService,
    private toast: ToastrService,) {
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onSecondSubmit(formData) {
    this.service.addTodo(formData.secondCtrl).subscribe(
      res => {
        this.firstCtrl = res;
        this.toast.simpleToast(
          'success',
          'Seller Upgrade Successfully',
          '',
        );
        this.stepperComponent.next();
      },
      err => {
        const errMessage = err.error.message
          ? err.error.message
          : 'Problem Communicating With Servers';
        this.toast.simpleToast('danger', errMessage, '');
      },
    );
    this.secondForm.markAsDirty();
  }
}
