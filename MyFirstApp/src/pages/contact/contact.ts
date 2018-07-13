import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MasinfoPage} from '../masinfo/masinfo';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  list = [];
  
  constructor(public navCtrl: NavController) {
    this.list = [
      {
        'title': 'Angular',
        'icon': 'angular',
        'description': 'Angular description',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'description': 'CSS3 description',
        'color': '#0CA9EA'
      }

    ];
  }

  openNavDetailsPage(item){
    this.navCtrl.push(MasinfoPage, {item: item});
  }

}
