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
import { GetCharactersCharacterIdSearchOk } from '../model/getCharactersCharacterIdSearchOk';
import { GetSearchOk } from '../model/getSearchOk';
import { InternalServerError } from '../model/internalServerError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SearchService {

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
     * Search on a string
     * Search for entities that match a given sub-string.  --- Alternate route: &#x60;/dev/characters/{character_id}/search/&#x60;  Alternate route: &#x60;/v3/characters/{character_id}/search/&#x60;  --- This route is cached for up to 3600 seconds
     * @param categories Type of entities to search for
     * @param characterId An EVE character ID
     * @param search The string to search on
     * @param datasource The server name you would like data from
     * @param language Language to use in the response
     * @param strict Whether the search should be a strict match
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdSearch(categories: Array<string>, characterId: number, search: string, datasource?: string, language?: string, strict?: boolean, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<GetCharactersCharacterIdSearchOk>;
    public getCharactersCharacterIdSearch(categories: Array<string>, characterId: number, search: string, datasource?: string, language?: string, strict?: boolean, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetCharactersCharacterIdSearchOk>>;
    public getCharactersCharacterIdSearch(categories: Array<string>, characterId: number, search: string, datasource?: string, language?: string, strict?: boolean, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetCharactersCharacterIdSearchOk>>;
    public getCharactersCharacterIdSearch(categories: Array<string>, characterId: number, search: string, datasource?: string, language?: string, strict?: boolean, token?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (categories === null || categories === undefined) {
            throw new Error('Required parameter categories was null or undefined when calling getCharactersCharacterIdSearch.');
        }
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdSearch.');
        }
        if (search === null || search === undefined) {
            throw new Error('Required parameter search was null or undefined when calling getCharactersCharacterIdSearch.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (categories) {
            queryParameters = queryParameters.set('categories', categories.join(COLLECTION_FORMATS['csv']));
        }
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (language !== undefined) {
            queryParameters = queryParameters.set('language', <any>language);
        }
        if (search !== undefined) {
            queryParameters = queryParameters.set('search', <any>search);
        }
        if (strict !== undefined) {
            queryParameters = queryParameters.set('strict', <any>strict);
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

        return this.httpClient.get<GetCharactersCharacterIdSearchOk>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/search/`,
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
     * Search on a string
     * Search for entities that match a given sub-string.  --- Alternate route: &#x60;/dev/search/&#x60;  Alternate route: &#x60;/v2/search/&#x60;  --- This route is cached for up to 3600 seconds
     * @param categories Type of entities to search for
     * @param search The string to search on
     * @param datasource The server name you would like data from
     * @param language Language to use in the response
     * @param strict Whether the search should be a strict match
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSearch(categories: Array<string>, search: string, datasource?: string, language?: string, strict?: boolean, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<GetSearchOk>;
    public getSearch(categories: Array<string>, search: string, datasource?: string, language?: string, strict?: boolean, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetSearchOk>>;
    public getSearch(categories: Array<string>, search: string, datasource?: string, language?: string, strict?: boolean, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetSearchOk>>;
    public getSearch(categories: Array<string>, search: string, datasource?: string, language?: string, strict?: boolean, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (categories === null || categories === undefined) {
            throw new Error('Required parameter categories was null or undefined when calling getSearch.');
        }
        if (search === null || search === undefined) {
            throw new Error('Required parameter search was null or undefined when calling getSearch.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (categories) {
            queryParameters = queryParameters.set('categories', categories.join(COLLECTION_FORMATS['csv']));
        }
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (language !== undefined) {
            queryParameters = queryParameters.set('language', <any>language);
        }
        if (search !== undefined) {
            queryParameters = queryParameters.set('search', <any>search);
        }
        if (strict !== undefined) {
            queryParameters = queryParameters.set('strict', <any>strict);
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

        return this.httpClient.get<GetSearchOk>(`${this.basePath}/search/`,
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
