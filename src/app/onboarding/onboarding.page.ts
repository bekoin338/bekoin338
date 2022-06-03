import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  constructor(private route: Router) { }

  ngOnInit() {
  }
  LoginPage(){ 
    this.route.navigate(['login'])
   }
  next() {
    this.slides.slideNext();
  }
  
}
