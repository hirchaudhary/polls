import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeltService} from '../belt.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question = {_id:""};
  options= [];
  params = "" ;
  constructor(private _route: ActivatedRoute, private beltService:BeltService, private router: Router) { 
    
  }

  ngOnInit() {
    this._route.paramMap
    .switchMap((params) => {
      this.params= params.get('id')
      
      return this.beltService.getQuestionWithAnswers(this.params);
    })
    .subscribe(belt => {
      this.options = belt.options;
      this.question = belt.question;
    });
  }
  increaseVotes(id, vote){
    this.beltService.increaseVotes({id:id, vote:vote})
    .then((id)=>{
      console.log("increase", id);
      
      this.beltService.getQuestionWithAnswers(this.params)
      .then(belt => {
        this.options = belt.options;
        this.question = belt.question;
        console.log(belt);
        
      })
      .catch(err => console.log(err))
    })
    .catch(err => {
      console.log(err);
    })
}
  logout(){
    this.beltService.logout()
    .then(logout => this.router.navigate(['']))
    .catch(err => console.log(err))
  }
}
