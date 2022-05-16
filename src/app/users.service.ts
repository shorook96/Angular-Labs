import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  users:IUser[]=[];
  url="https://jsonplaceholder.typicode.com/users"

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "server error")
    }));
  }
}
