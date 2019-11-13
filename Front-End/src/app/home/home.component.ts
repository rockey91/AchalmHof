import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageUrlArray = [
    { url: './assets/images/hall1.jpg', captionBackground : '#fff', caption: 'Achalm Hof erleben', href: '/home/functionhalls' },
    { url: './assets/images/hall2.jpg'}
  ];
  constructor(private router: Router) {}

  ngOnInit(){

  }

  NavigateToFunctionHalls() {
      this.router.navigate(['/home/functionhalls']);
  }

}
