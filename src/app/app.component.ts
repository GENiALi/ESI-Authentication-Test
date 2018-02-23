import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ErrorReportingProvider } from '../providers/error-reporting/error-reporting';

// Deeplinks for authorisation callback url...
import { Deeplinks } from '@ionic-native/deeplinks';

// Custom auth provider
import { EveAuthProvider } from '../providers/eve-auth/eve-auth';

import { HomePage } from '../pages/home/home';
import { FleetManagementPage } from '../pages/fleet-management/fleet-management';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private deeplinks: Deeplinks, private errorReport: ErrorReportingProvider, private eveAuth: EveAuthProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Fleets', component:  FleetManagementPage }
    ];

  }

  ngAfterViewInit() {
    this.deeplinks.route({
      '/': HomePage
    }).subscribe((match) => {
      this.errorReport.logSuccess('Retrieved auth code from browser! ' + match.$args.code);
      this.eveAuth.authExchangeAuthCode(match.$args.code);
    }, (nomatch) => {
      this.errorReport.logError('Got a deeplink that didnt match!' + nomatch);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
