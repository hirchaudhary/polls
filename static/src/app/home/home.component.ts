import { Component, OnInit } from '@angular/core';
import { BeltService} from '../belt.service';
import { Router} from "@angular/router"; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {};
  search = {content: ""};
  questions = [];
  searchQuestions = this.questions;
  
  constructor(private beltService:BeltService, private router: Router) { }

  ngOnInit() {
    this.beltService.getUser()
    .then(user=> {
      this.user = user;
    })
    .catch(err=> console.log(err))
    
    this.beltService.getQuestions()
    .then(question => {
      this.questions = question;
    })
    .catch(err => console.log("in error",err)) 
  }


  logout(){
    this.beltService.logout()
    .then(logout => this.router.navigate(['']))
    .catch(err => console.log(err))
  }

  getSearch(){
    this.searchQuestions = this.questions.filter(que => {
      return que.question.toLowerCase().includes(this.search.content.toLowerCase())
    })  
  }

  delete(id){
    this.beltService.destroy(id)
    .then(logout => {
      this.beltService.getQuestions()
      .then(question => {
        this.questions = question;
      })
      .catch(err => console.log("in error",err))
    })
    .catch(err => console.log(err))
  }
}
