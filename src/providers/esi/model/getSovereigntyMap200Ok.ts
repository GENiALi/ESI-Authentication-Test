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


/**
 * 200 ok object
 */
export interface GetSovereigntyMap200Ok {
    /**
     * system_id integer
     */
    systemId: number;
    /**
     * alliance_id integer
     */
    allianceId?: number;
    /**
     * corporation_id integer
     */
    corporationId?: number;
    /**
     * faction_id integer
     */
    factionId?: number;
}
