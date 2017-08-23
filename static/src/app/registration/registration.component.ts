import { Component, OnInit } from '@angular/core';
import { BeltService} from '../belt.service';
import { Router} from "@angular/router";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    user = {};
    constructor(private beltService:BeltService, private router: Router) { }

    ngOnInit() {
    }

    addUser(){
        this.beltService.addUser(this.user)
        .then((user)=>{
                this.router.navigate(['gohome']);
            })
        .catch(err => {
            JSON.parse(err._body) 
        })
    }

}