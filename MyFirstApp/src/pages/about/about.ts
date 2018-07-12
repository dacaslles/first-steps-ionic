import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  list: Array<any> = [
    {
      title: "Perro",
      color: "#444"
    },
    {
      title: "Gato",
      color: "#999"
    }

  ]

  constructor(public navCtrl: NavController) {

  }

}
