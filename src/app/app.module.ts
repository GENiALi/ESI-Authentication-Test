import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FleetManagementPage } from '../pages/fleet-management/fleet-management';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Browsertab is used for handling authentication details sent from the ESI
import { BrowserTab } from '@ionic-native/browser-tab';

// Deeplinks for authorisation callback url...
import { Deeplinks } from '@ionic-native/deeplinks';

// Custom error reporting
import { ErrorReportingProvider } from '../providers/error-reporting/error-reporting';

// Custom authentication handling
import { EveAuthProvider } from '../providers/eve-auth/eve-auth';

// SQLLite for storing auth details
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

// Native HTTP Client for custom written authentication code
import { HTTP } from '@ionic-native/http';

// Action Sheet Controller
import { ActionSheetController } from 'ionic-angular';

// Required for Swagger client
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent } from '@angular/common/http';

// Toast Controller
import { ToastController } from 'ionic-angular';

// Swagger Client Services
import { ApiModule } from '../providers/esi/index';

// Custom fleet list Component
import { FleetListComponent } from '../components/fleet-list/fleet-list'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FleetManagementPage,
    FleetListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ApiModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FleetManagementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BrowserTab,
    ErrorReportingProvider,
    Deeplinks,
    SQLite,
    HTTP,
    ToastController,
    ActionSheetController,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EveAuthProvider
  ]
})
export class AppModule {}
