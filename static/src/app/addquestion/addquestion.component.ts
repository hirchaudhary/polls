import { Component, OnInit } from '@angular/core';
import { BeltService} from '../belt.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  que = {}
  opt = {}
  constructor(private beltService:BeltService, private router: Router) { }

  ngOnInit() {
  }

  newQuestion(){
    this.beltService.newQuestion({que: this.que, opt:this.opt})
    .then((question)=>{
            this.router.navigate(['gohome']);
        })
    .catch(err => {
        JSON.parse(err._body) 
    })
  }

logout(){
    this.beltService.logout()
    .then(logout => this.router.navigate(['']))
    .catch(err => console.log(err))
  }

}
