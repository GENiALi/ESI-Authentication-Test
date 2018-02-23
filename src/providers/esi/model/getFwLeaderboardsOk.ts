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
import { GetFwLeaderboardsKills } from './getFwLeaderboardsKills';
import { GetFwLeaderboardsVictoryPoints } from './getFwLeaderboardsVictoryPoints';


/**
 * 200 ok object
 */
export interface GetFwLeaderboardsOk {
    kills: GetFwLeaderboardsKills;
    victoryPoints: GetFwLeaderboardsVictoryPoints;
}
