import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageUrlArray: (string)[] = [
    { url: 'https://achalmhof.de/wp-content/uploads/2017/04/Homepage-Startseite-Hofladen-300x300.jpg', captionBackground : '#fff', caption: 'Achalm Hof erleben', href: '/home/functionhalls' },
    { url: 'https://achalmhof.de/wp-content/uploads/2016/08/events-300x300.jpg'}
  ];
  constructor(private router: Router) {}

  ngOnInit(){

  }

  NavigateFunctionHall() {
      this.router.navigate(['/home/functionhalls']);
  }

}
