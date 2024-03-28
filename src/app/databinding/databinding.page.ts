import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.page.html',
  styleUrls: ['./databinding.page.scss'],
})
export class DatabindingPage implements OnInit {

  userName: string = "";
  password: string = "";
  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async logIn(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Status',
      message: 'LOG IN SUCCESSFULLY',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigate(['dashboard/home'])
  }

}
