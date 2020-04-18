import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  //toggle mobile menu
  isOpenMobileMenu = false;
  toggleMenu = ()=>{
    this.isOpenMobileMenu = !this.isOpenMobileMenu;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
