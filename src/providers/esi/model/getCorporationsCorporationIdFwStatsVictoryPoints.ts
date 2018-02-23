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
 * Summary of victory points gained by the given corporation for the enlisted faction
 */
export interface GetCorporationsCorporationIdFwStatsVictoryPoints {
    /**
     * Yesterday's victory points gained by members of the given corporation
     */
    yesterday: number;
    /**
     * Last week's victory points gained by members of the given corporation
     */
    lastWeek: number;
    /**
     * Total victory points gained since the given corporation enlisted
     */
    total: number;
}
