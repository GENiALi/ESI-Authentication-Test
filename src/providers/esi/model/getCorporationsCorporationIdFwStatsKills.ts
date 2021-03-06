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
 * Summary of kills done by the given corporation against enemy factions
 */
export interface GetCorporationsCorporationIdFwStatsKills {
    /**
     * Yesterday's total number of kills by members of the given corporation against enemy factions
     */
    yesterday: number;
    /**
     * Last week's total number of kills by members of the given corporation against enemy factions
     */
    lastWeek: number;
    /**
     * Total number of kills by members of the given corporation against enemy factions since the corporation enlisted
     */
    total: number;
}
