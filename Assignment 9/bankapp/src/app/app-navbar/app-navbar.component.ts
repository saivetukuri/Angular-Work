import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


import { AuthService } from '.././auth.service';
import { MenuService } from '../service/menu.service';
import { Menu } from '../uimodel/menu';
const defaultM: Menu[] = [
  { id: 11, name: 'Deposit',url:'/deposit' },
  { id: 12, name: 'FundTranfer',url:'/fundtransfer' },
  { id: 13, name: 'KycVerification',url:'/kyc' }
  
];

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  menu:Menu=new Menu();
  menues = defaultM;
  type:string="";
  selectedMenu: Menu = new Menu();

  //title = 'சிலாக்கி.. டும்';
  title = "Bank Nav Bar";
  constructor(public menuService: MenuService,public authService: AuthService,public router:Router,public route: ActivatedRoute) { }

  ngOnInit() {
    console.log("===================in Nav Bar Component");
    this.isLoggedIn=this.authService.isLoggedIn;
    //this.router.navigate(['/lhsnav']);
    this.route.params.subscribe(params => {
      this.type = params['id']||''; // (+) converts string 'id' to a number
      console.log("===================input.."+this.type);
      // In a real app: dispatch action to load the details here.
  
   });
  }

  
  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }
}
