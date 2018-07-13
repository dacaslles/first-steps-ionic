import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alert: AlertController) {

  }

  gotoMasinfo(){

    this.navCtrl.push(MasinfoPage);
    
  }

  doBasicAlert(){
    let myAlert = this.alert.create({
      title: 'Titulo de la alerta',
      message: 'Mensaje para usar',
      buttons: ['OK','No OK']
    });
    myAlert.present();
  }

  doEnterAlert(){
    let myAlert = this.alert.create({
      title: 'Campo requerido',
      message: 'Ingrese nombre',
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'nombre'
        }
      ],
      buttons: 
      [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel pressed');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved pressed')
          }
        }
      ]
    });
    myAlert.present();
  }
}
