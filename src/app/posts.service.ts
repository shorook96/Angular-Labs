import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { IPost } from './IPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  posts:IPost[]=[];
  url="https://jsonplaceholder.typicode.com/posts"

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "server error")
    }));
  }
}

