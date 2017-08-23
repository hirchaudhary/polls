import { CanActivate } from '@angular/router';
import { Injectable } from "@angular/core";
import { BeltService } from './belt.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router"; 

@Injectable()

export class LoginActivate implements CanActivate{
    constructor(private beltService: BeltService, private router: Router) {}
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) {
      if (!this.beltService.isLoggedIn()) {
        this.router.navigate(['']);
      }
      return true;
    }
}
