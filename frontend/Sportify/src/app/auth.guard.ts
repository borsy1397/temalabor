import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetdataService } from './getdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private dataService: GetdataService,
    private router: Router) { }


  canActivate() {

    if (this.dataService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

}
