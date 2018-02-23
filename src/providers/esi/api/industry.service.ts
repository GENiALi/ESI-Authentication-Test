/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.7.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Forbidden } from '../model/forbidden';
import { GetCharactersCharacterIdIndustryJobs200Ok } from '../model/getCharactersCharacterIdIndustryJobs200Ok';
import { GetCharactersCharacterIdMining200Ok } from '../model/getCharactersCharacterIdMining200Ok';
import { GetCorporationCorporationIdMiningExtractions200Ok } from '../model/getCorporationCorporationIdMiningExtractions200Ok';
import { GetCorporationCorporationIdMiningObservers200Ok } from '../model/getCorporationCorporationIdMiningObservers200Ok';
import { GetCorporationCorporationIdMiningObserversObserverId200Ok } from '../model/getCorporationCorporationIdMiningObserversObserverId200Ok';
import { GetCorporationsCorporationIdIndustryJobs200Ok } from '../model/getCorporationsCorporationIdIndustryJobs200Ok';
import { GetIndustryFacilities200Ok } from '../model/getIndustryFacilities200Ok';
import { GetIndustrySystems200Ok } from '../model/getIndustrySystems200Ok';
import { InternalServerError } from '../model/internalServerError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class IndustryService {

    protected basePath = 'https://esi.tech.ccp.is/latest';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * List character industry jobs
     * List industry jobs placed by a character  --- Alternate route: &#x60;/dev/characters/{character_id}/industry/jobs/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/industry/jobs/&#x60;  Alternate route: &#x60;/v1/characters/{character_id}/industry/jobs/&#x60;  --- This route is cached for up to 300 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param includeCompleted Whether retrieve completed character industry jobs as well
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdIndustryJobs(characterId: number, datasource?: string, includeCompleted?: boolean, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetCharactersCharacterIdIndustryJobs200Ok>>;
    public getCharactersCharacterIdIndustryJobs(characterId: number, datasource?: string, includeCompleted?: boolean, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetCharactersCharacterIdIndustryJobs200Ok>>>;
    public getCharactersCharacterIdIndustryJobs(characterId: number, datasource?: string, includeCompleted?: boolean, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetCharactersCharacterIdIndustryJobs200Ok>>>;
    public getCharactersCharacterIdIndustryJobs(characterId: number, datasource?: string, includeCompleted?: boolean, token?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdIndustryJobs.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (includeCompleted !== undefined) {
            queryParameters = queryParameters.set('include_completed', <any>includeCompleted);
        }
        if (token !== undefined) {
            queryParameters = queryParameters.set('token', <any>token);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetCharactersCharacterIdIndustryJobs200Ok>>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/industry/jobs/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Character mining ledger
     * Paginated record of all mining done by a character for the past 30 days   --- Alternate route: &#x60;/dev/characters/{character_id}/mining/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/mining/&#x60;  Alternate route: &#x60;/v1/characters/{character_id}/mining/&#x60;  --- This route is cached for up to 600 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdMining(characterId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetCharactersCharacterIdMining200Ok>>;
    public getCharactersCharacterIdMining(characterId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetCharactersCharacterIdMining200Ok>>>;
    public getCharactersCharacterIdMining(characterId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetCharactersCharacterIdMining200Ok>>>;
    public getCharactersCharacterIdMining(characterId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdMining.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (token !== undefined) {
            queryParameters = queryParameters.set('token', <any>token);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetCharactersCharacterIdMining200Ok>>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/mining/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Moon extraction timers
     * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.   --- Alternate route: &#x60;/dev/corporation/{corporation_id}/mining/extractions/&#x60;  Alternate route: &#x60;/legacy/corporation/{corporation_id}/mining/extractions/&#x60;  Alternate route: &#x60;/v1/corporation/{corporation_id}/mining/extractions/&#x60;  --- This route is cached for up to 1800 seconds  --- Requires one of the following EVE corporation role(s): Structure_manager 
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationCorporationIdMiningExtractions(corporationId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetCorporationCorporationIdMiningExtractions200Ok>>;
    public getCorporationCorporationIdMiningExtractions(corporationId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetCorporationCorporationIdMiningExtractions200Ok>>>;
    public getCorporationCorporationIdMiningExtractions(corporationId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetCorporationCorporationIdMiningExtractions200Ok>>>;
    public getCorporationCorporationIdMiningExtractions(corporationId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationCorporationIdMiningExtractions.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (token !== undefined) {
            queryParameters = queryParameters.set('token', <any>token);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetCorporationCorporationIdMiningExtractions200Ok>>(`${this.basePath}/corporation/${encodeURIComponent(String(corporationId))}/mining/extractions/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Corporation mining observers
     * Paginated list of all entities capable of observing and recording mining for a corporation   --- Alternate route: &#x60;/dev/corporation/{corporation_id}/mining/observers/&#x60;  Alternate route: &#x60;/legacy/corporation/{corporation_id}/mining/observers/&#x60;  Alternate route: &#x60;/v1/corporation/{corporation_id}/mining/observers/&#x60;  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant 
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationCorporationIdMiningObservers(corporationId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetCorporationCorporationIdMiningObservers200Ok>>;
    public getCorporationCorporationIdMiningObservers(corporationId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetCorporationCorporationIdMiningObservers200Ok>>>;
    public getCorporationCorporationIdMiningObservers(corporationId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetCorporationCorporationIdMiningObservers200Ok>>>;
    public getCorporationCorporationIdMiningObservers(corporationId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationCorporationIdMiningObservers.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (token !== undefined) {
            queryParameters = queryParameters.set('token', <any>token);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetCorporationCorporationIdMiningObservers200Ok>>(`${this.basePath}/corporation/${encodeURIComponent(String(corporationId))}/mining/observers/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Observed corporation mining
     * Paginated record of all mining seen by an observer   --- Alternate route: &#x60;/dev/corporation/{corporation_id}/mining/observers/{observer_id}/&#x60;  Alternate route: &#x60;/legacy/corporation/{corporation_id}/mining/observers/{observer_id}/&#x60;  Alternate route: &#x60;/v1/corporation/{corporation_id}/mining/observers/{observer_id}/&#x60;  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant 
     * @param corporationId An EVE corporation ID
     * @param observerId A mining observer id
     * @param datasource The server name you would like data from
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationCorporationIdMiningObserversObserverId(corporationId: number, observerId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetCorporationCorporationIdMiningObserversObserverId200Ok>>;
    public getCorporationCorporationIdMiningObserversObserverId(corporationId: number, observerId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetCorporationCorporationIdMiningObserversObserverId200Ok>>>;
    public getCorporationCorporationIdMiningObserversObserverId(corporationId: number, observerId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetCorporationCorporationIdMiningObserversObserverId200Ok>>>;
    public getCorporationCorporationIdMiningObserversObserverId(corporationId: number, observerId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationCorporationIdMiningObserversObserverId.');
        }
        if (observerId === null || observerId === undefined) {
            throw new Error('Required parameter observerId was null or undefined when calling getCorporationCorporationIdMiningObserversObserverId.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (token !== undefined) {
            queryParameters = queryParameters.set('token', <any>token);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetCorporationCorporationIdMiningObserversObserverId200Ok>>(`${this.basePath}/corporation/${encodeURIComponent(String(corporationId))}/mining/observers/${encodeURIComponent(String(observerId))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List corporation industry jobs
     * List industry jobs run by a corporation  --- Alternate route: &#x60;/dev/corporations/{corporation_id}/industry/jobs/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/industry/jobs/&#x60;  Alternate route: &#x60;/v1/corporations/{corporation_id}/industry/jobs/&#x60;  --- This route is cached for up to 300 seconds  --- Requires one of the following EVE corporation role(s): FactoryManager 
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param includeCompleted Whether retrieve completed industry jobs as well
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationsCorporationIdIndustryJobs(corporationId: number, datasource?: string, includeCompleted?: boolean, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetCorporationsCorporationIdIndustryJobs200Ok>>;
    public getCorporationsCorporationIdIndustryJobs(corporationId: number, datasource?: string, includeCompleted?: boolean, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetCorporationsCorporationIdIndustryJobs200Ok>>>;
    public getCorporationsCorporationIdIndustryJobs(corporationId: number, datasource?: string, includeCompleted?: boolean, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetCorporationsCorporationIdIndustryJobs200Ok>>>;
    public getCorporationsCorporationIdIndustryJobs(corporationId: number, datasource?: string, includeCompleted?: boolean, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationsCorporationIdIndustryJobs.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (includeCompleted !== undefined) {
            queryParameters = queryParameters.set('include_completed', <any>includeCompleted);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (token !== undefined) {
            queryParameters = queryParameters.set('token', <any>token);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetCorporationsCorporationIdIndustryJobs200Ok>>(`${this.basePath}/corporations/${encodeURIComponent(String(corporationId))}/industry/jobs/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List industry facilities
     * Return a list of industry facilities  --- Alternate route: &#x60;/dev/industry/facilities/&#x60;  Alternate route: &#x60;/legacy/industry/facilities/&#x60;  Alternate route: &#x60;/v1/industry/facilities/&#x60;  --- This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getIndustryFacilities(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetIndustryFacilities200Ok>>;
    public getIndustryFacilities(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetIndustryFacilities200Ok>>>;
    public getIndustryFacilities(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetIndustryFacilities200Ok>>>;
    public getIndustryFacilities(datasource?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetIndustryFacilities200Ok>>(`${this.basePath}/industry/facilities/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List solar system cost indices
     * Return cost indices for solar systems  --- Alternate route: &#x60;/dev/industry/systems/&#x60;  Alternate route: &#x60;/legacy/industry/systems/&#x60;  Alternate route: &#x60;/v1/industry/systems/&#x60;  --- This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getIndustrySystems(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetIndustrySystems200Ok>>;
    public getIndustrySystems(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetIndustrySystems200Ok>>>;
    public getIndustrySystems(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetIndustrySystems200Ok>>>;
    public getIndustrySystems(datasource?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetIndustrySystems200Ok>>(`${this.basePath}/industry/systems/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
