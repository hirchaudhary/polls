import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class BeltService {

  constructor(private http:Http) { }
  isLogin = false;
  
    isLoggedIn(){
      return this.isLogin;
    }

    addUser(user) {
      return this.http.post(`/createUser`, user)
      .map( data => {
        this.isLogin = true;
        data.json()
      })
      .toPromise();
    }

    getStatus(){
      return this.http.get('/getStatus')
      .map( data => {
        if(data){
          this.isLogin = true
        }
      })
      .toPromise();
    }

    logout(){
      return this.http.get(`/logout`)
      .map( data => {
        this.isLogin = false;
        data.json()
      } )
      .toPromise();
    }
  
    getUser(){
      return this.http.get('/getUser')
      .map( data => data.json())
      .toPromise();
    }

    newQuestion(question) {
      return this.http.post(`/addPoll`, question)
      .map( data => {
        data.json()
      } )
      .toPromise();
    }

    getQuestions(){
      return this.http.get('/getQuestions')
      .map( data => data.json())
      .toPromise();
    }

    getQuestionWithAnswers(id){
      return this.http.get(`/question/${id}`)
          .map(data => data.json())
          .toPromise();
    }

    increaseVotes(id) {
      return this.http.put(`/increaseVotes`, id)
      .map( data => {
        console.log(data)
        return data.json()
      })
      .toPromise();
    }
  
    destroy(id){
      return this.http.put(`/delete`, {id:id})
      .map( data => {
        data.json()
      } )
      .toPromise();
    }
}
