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
import { GetCorporationsCorporationIdFwStatsKills } from './getCorporationsCorporationIdFwStatsKills';
import { GetCorporationsCorporationIdFwStatsVictoryPoints } from './getCorporationsCorporationIdFwStatsVictoryPoints';


/**
 * 200 ok object
 */
export interface GetCorporationsCorporationIdFwStatsOk {
    /**
     * The faction the given corporation is enlisted to fight for. Will not be included if corporation is not enlisted in faction warfare
     */
    factionId?: number;
    /**
     * The enlistment date of the given corporation into faction warfare. Will not be included if corporation is not enlisted in faction warfare
     */
    enlistedOn?: Date;
    /**
     * How many pilots the enlisted corporation has. Will not be included if corporation is not enlisted in faction warfare
     */
    pilots?: number;
    kills: GetCorporationsCorporationIdFwStatsKills;
    victoryPoints: GetCorporationsCorporationIdFwStatsVictoryPoints;
}
