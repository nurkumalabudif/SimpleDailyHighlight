import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
    apiEndPoint;
    currentSettings;
  
    constructor(
      private http: HttpClient,
    ) {}

    addName(name): Observable<Object> {
        const paramData = {
            name: name
        };
        return this.http.post(
            'api/todo',
            paramData
        );
    }

    addTodo(todoDesc): Observable<Object> {
        const paramData = {
            todoName: todoDesc,
            isDone: 0
        };
        console.log(paramData);
        return this.http.post(
            'api/todo/',
            paramData
        );
    }

    GetList(): Observable<Object> {
        return this.http.get(
            'api/todo/'
        );
    }

    setTodoStat(id, todoDesc, isActive): Observable<Object> {
        const paramData = {
            todoName: todoDesc,
            isDone: isActive
        };
        console.log(paramData);
        return this.http.put(
            'api/todo/' + id,
            paramData
        );
    }
}