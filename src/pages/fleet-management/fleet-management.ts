import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

// Custom Auth implentation...
import { EveAuthProvider } from '../../providers/eve-auth/eve-auth';

// Swagger Codegen Client...
import { FleetsService } from '../../providers/esi/index';

@IonicPage()
@Component({
  selector: 'page-fleet-management',
  templateUrl: 'fleet-management.html',
})
export class FleetManagementPage {

  fleet = {
    "freemove": true,
    "wings": [],
    "members": []
  };

  constructor(private toastCtrl: ToastController, private eveAuth: EveAuthProvider, private fleetService: FleetsService, private actionSheetCtrl: ActionSheetController) {

    this.refreshFleet();

  }

  refreshFleet(refresher?:any){
    // Check if character is in a fleet and return an error if they are not.
    this.fleetService.getCharactersCharacterIdFleet(Number(this.eveAuth.currentChar.id), "tranquility", this.eveAuth.currentChar.accessToken)
      .subscribe(res => {
        // Now make sure that the character is in squad, wing or fleet command otherwise we can't actually view the fleet structure.
        if (res.role == 'fleet_commander' || res.role == 'wing_commander' || res.role == 'squad_commander'){
          this.fleetService.getFleetsFleetId(res.fleet_id, "tranquility", this.eveAuth.currentChar.accessToken)
            .subscribe(resFleetConfig => {
              console.log(resFleetConfig);
            }, err =>{
              console.log(err);
            });
        }else{
          this.showToast('You are not in a command position');
        }

        if (refresher != null){
  				refresher.complete();
  			}
      }, err => {
        this.showToast(err.error.error);

        if (refresher != null){
  				refresher.complete();
  			}
      });
  }

  addNew(){
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Create Wing',
          handler: () => {
            console.log('wing');
          }
        },
        {
          text: 'Create Squad',
          handler: () => {
            console.log('squad');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel');
          }
        }
      ]
    });

    actionSheet.present();
  }

  settings(){
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Fleet Templates',
          handler: () => {
            console.log('fleet templates');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel');
          }
        }
      ]
    });

    actionSheet.present();
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }


}
