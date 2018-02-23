import { Injectable } from '@angular/core';

// Custom error reporting
import { ErrorReportingProvider } from '../error-reporting/error-reporting';

// Native HTTP Client...
import { HTTP } from '@ionic-native/http';

// Native SQLite databases for storing auth details
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

// Import Zone for manual DOM updates...
import { NgZone } from '@angular/core';

@Injectable()
export class EveAuthProvider {

  public databaseConnected:boolean = false;
	public db:SQLiteObject;

  public listCharacters = [];

  // Authentication Variables
	public currentChar = {id: '0', name: null, accessToken: null, refreshToken: null};

  constructor(private sqlite: SQLite, private errorReport: ErrorReportingProvider, private http: HTTP, private zone: NgZone) {

  }

  isDatabaseConnected(){

		return new Promise((resolve, reject) => {
			this.sqlite.create({
				name: 'evepodgoo.db',
				location: 'default'
			}).then((database: SQLiteObject) => {
				this.errorReport.logSuccess('Connected to the evepodgoo.db!');
				this.databaseConnected = true;
				this.db = database;

				// Initialise tables for the Database...
				this.db.executeSql('create table if not exists Characters (CharID int not null unique, Name varchar(255), Expires varchar(255), AccessToken varchar(255), RefreshToken varchar(255))', {})
					.then(() => this.errorReport.logSuccess('Table Characters has been created or already exists!'))
					.catch(e => this.errorReport.logError('Table Characters cannot be created!' + e));

				resolve();
			}).catch((error) => {
				this.errorReport.logError('Cannot connect to SQLite DB! ' + error);
				this.databaseConnected = false;
				reject();
			});
		});

	}

  authExchangeAuthCode(authCode: string) {
		this.errorReport.logInfo('Received auth code (' + authCode + ') from deeplink. Attempting to exchange for an auth code from the eve api...');

		this.http.post('https://login.eveonline.com/oauth/token', { grant_type: 'authorization_code', code: authCode }, { Authorization: 'Basic xxxxxxxxx'})
		.then(authResponse => {
			this.errorReport.logSuccess('The auth code was successfully exchanged for an access token and refresh token!');

			var jsonTokenData = JSON.parse(authResponse.data);
			this.errorReport.logInfo('Access Token: ' + jsonTokenData.access_token);
			this.errorReport.logInfo('Refresh Token: ' + jsonTokenData.refresh_token);

			this.authVerifyAccessToken(jsonTokenData.access_token, jsonTokenData.refresh_token);
		})
		.catch(authError => {
			this.errorReport.logError('Cannot exchange auth code for access token: ' + authError.error);
		});
	}

  authVerifyAccessToken(accessToken: string, refreshToken: string){
		// Now we have access token and refresh token we need to verify them to get Character ID and Name...
		this.http.get('https://login.eveonline.com/oauth/verify', {}, { Authorization: 'Bearer ' + accessToken})
		.then(verifyResponse => {
			this.errorReport.logSuccess('Access token verified and Character details retrieved!');

			var jsonCharData = JSON.parse(verifyResponse.data);
			this.errorReport.logInfo('--- Char ID: ' + jsonCharData.CharacterID);
			this.errorReport.logInfo('--- Char Name: ' + jsonCharData.CharacterName);
			this.errorReport.logInfo('--- Expires On: ' + jsonCharData.ExpiresOn);
			this.errorReport.logInfo('--- Token Type: ' + jsonCharData.TokenType);
			this.errorReport.logInfo('--- Scopes: ' + jsonCharData.Scopes);

			// Now store the above details in the SQLite DB...
			this.db.executeSql('insert into Characters values (?, ?, ?, ?, ?);', [jsonCharData.CharacterID, jsonCharData.CharacterName, jsonCharData.ExpiresOn, accessToken, refreshToken])
				.then(() => {
          this.errorReport.logSuccess('Character added to database successfully.');
					this.zone.run(
						() => {
							 this.authRefreshCharacterList();
						}
					 )
				}).catch(e => this.errorReport.logError('Cannot insert new Character in to the database! ' + e));

		})
		.catch(verifyError => {
			this.errorReport.logError('Cannot verify access token: ' + verifyError.error);
		});
	}

  authRefreshCharacterList(refresher?:any){
		this.db.executeSql('select * from Characters', []).then((r) => {
			this.errorReport.logSuccess('Selected Characters from database!');
			// Now we have the Characters we need to add their card to the selection screen...
			// First clear the current list and then add the new list...
			this.listCharacters = [];

			if(r.rows.length > 0) {
				for(var i = 0; i < r.rows.length; i++) {
					this.listCharacters.push(r.rows.item(i));
				}
			}

			if (refresher != null){
				refresher.complete();
			}

		}).catch(e => this.errorReport.logError('Cannot select Characters from DB! ' + e));
	}

  authRemoveCharacter(id: string){
		return new Promise((resolve, reject) => {
			this.db.executeSql('DELETE FROM Characters WHERE CharID=' + id + ';', []).then(() => {
				this.errorReport.logSuccess('Deleted Character: ' + id);
				this.zone.run(
					() => {
						 this.authRefreshCharacterList();
					}
				 )
			}).catch((e) => {
				this.errorReport.logError('Cannot delete ' + id + ' from the database! ' + e);
			});
		});
	}

  authRefreshTokens(id: string, refreshToken: string){
		console.log('Info: Refreshing auth tokens for Charater ' + id);

		return new Promise((resolve, reject) => {
			this.http.post('https://login.eveonline.com/oauth/token', { grant_type: 'refresh_token', refresh_token: refreshToken }, { Authorization: 'Basic xxxxxxxxx'})
			.then(refreshResponse => {
				this.errorReport.logSuccess('Refresh code successfully exchanged for an access token and refresh token. Processing Character details...');
				var jsonTokenData = JSON.parse(refreshResponse.data);
				this.errorReport.logInfo('Access token: ' + jsonTokenData.access_token);
				this.errorReport.logInfo('Refresh token: ' + jsonTokenData.refresh_token);

				// Store new access code etc in SQLite DB...
				this.db.executeSql('update Characters set AccessToken = ? where CharID = ?', [jsonTokenData.access_token, id]).then((r) => {
					this.errorReport.logSuccess('Updated access token in DB for Character ' + id);
				}).catch(e => this.errorReport.logError('Cannot update Character access tokens in database!'));

				resolve();

			})
			.catch(refreshError => {
				this.errorReport.logError('Cannot refresh Character tokens! ' + refreshError.error);
				reject();
			});
		});
	}

  authSelectCharacter(id: string){
		return new Promise((resolve, reject) => {
			this.db.executeSql('select * from Characters where CharID=?', [id]).then((r) => {
				this.errorReport.logSuccess('Selected Character ' + id + ' from database!');

				if(r.rows.length > 0) {
					for(var i = 0; i < r.rows.length; i++) {
						this.currentChar.id = r.rows.item(i).CharID;
						this.currentChar.name = r.rows.item(i).Name;
						this.currentChar.refreshToken = r.rows.item(i).RefreshToken;
						this.currentChar.accessToken = r.rows.item(i).AccessToken;
					}

          this.authRefreshTokens(this.currentChar.id, this.currentChar.refreshToken).then(() => {
            resolve();
          }).catch(() => {
            reject();
          });

				}else{
					reject();
				}

			}).catch((e) => {
				this.errorReport.logError('Cannot select Characters from DB! ' + e);
				reject();
			});
		});
	}

}
