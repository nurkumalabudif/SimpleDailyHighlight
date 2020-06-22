import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';
import { TodoService } from '../todolist.service';
import { ToastrService } from '../../../_services/toastr.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dataList: any;
  todoStat: any;
  todoDone: boolean;
  idSelected: any;

  constructor(
    private service : TodoService,
    private toast: ToastrService
    ) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList(){
    this.service.GetList().subscribe(
      res => {
        this.dataList = res;
      },
      err => {
        const errMessage = err.error.message
          ? err.error.message
          : 'Problem Communicating With Servers';
        this.toast.simpleToast('danger', errMessage, '');
      },
    );
  }

  setTodoStat(id,todoName,event){
    this.todoStat = 0;
    if(event == true){ 
      this.todoStat = 1;
    }
    this.service.setTodoStat(id,todoName,this.todoStat)
    .subscribe(res =>
    { 
      console.log("sukseuor");
      window.location.reload();
    },
    err => {
      const errMessage = err.error.message
          ? err.error.message
          : 'Problem Communicating With Servers';
        this.toast.simpleToast('danger', errMessage, '');
    });
  }
}
