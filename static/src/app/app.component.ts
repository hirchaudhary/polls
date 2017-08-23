import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BeltService } from "./belt.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private beltService:BeltService, private router: Router) { 
  }
  
  ngOnInit() {
    this.beltService.getStatus()
  }
}
