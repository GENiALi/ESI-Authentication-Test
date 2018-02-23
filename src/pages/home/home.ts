import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Custom auth provider
import { EveAuthProvider } from '../../providers/eve-auth/eve-auth';

import { ErrorReportingProvider } from '../../providers/error-reporting/error-reporting';

import { BrowserTab } from '@ionic-native/browser-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private browserTab: BrowserTab, private errorReport: ErrorReportingProvider, private eveAuth: EveAuthProvider) {
    // Try connecting to the SQLite DB and update databaseConnected...
		this.eveAuth.isDatabaseConnected().then((data) => {
      this.errorReport.logSuccess("Connected to the SQLite DB.");

      this.eveAuth.authRefreshCharacterList();
		}).catch((error) => {
			// Cannot connect to database. This is already logged within the function so needs no more logging...
      this.errorReport.logError("Cannot connect to SQLite DB");
		});
  }

  addCharacter(){
    this.browserTab.isAvailable().then((isAvailable: boolean) => {
			if (isAvailable) {
        this.errorReport.logInfo("Opening browsertab to add new Character.");
				this.browserTab.openUrl('https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=eveauthpodgoo://callback/&client_id=93b1a1fc5f784f8c92d20aace808b116&scope=publicData%20esi-fleets.read_fleet.v1%20esi-fleets.write_fleet.v1&state=addCharacter');
			} else {
				// display error message and log it
        this.errorReport.logError("Unable to open browsertab.");
			}
		});
  }

  selectCharacter(id: string, refreshToken: string){
    this.eveAuth.authSelectCharacter(id);
  }

  removeCharacter(id: string){
    this.eveAuth.authRemoveCharacter(id);
  }

}
