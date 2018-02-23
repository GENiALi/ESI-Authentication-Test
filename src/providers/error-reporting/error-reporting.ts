import { Injectable } from '@angular/core';

@Injectable()
export class ErrorReportingProvider {

  constructor() {
    console.log('Error reporting online.');
  }

  logError(message: string){
    console.warn("Error: " + message);
  }

  logInfo(message: string){
    console.log("Info: " + message);
  }

  logSuccess(message: string){
    console.log("Success: " + message);
  }

}
