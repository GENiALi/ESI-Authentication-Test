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
export interface GetCharactersCharacterIdFleetOk {
    /**
     * The character's current fleet ID
     */
    fleet_id: number;
    /**
     * ID of the wing the member is in. If not applicable, will be set to -1
     */
    wing_id: number;
    /**
     * ID of the squad the member is in. If not applicable, will be set to -1
     */
    squad_id: number;
    /**
     * Member’s role in fleet
     */
    role: GetCharactersCharacterIdFleetOk.RoleEnum;
}
export namespace GetCharactersCharacterIdFleetOk {
    export type RoleEnum = 'fleet_commander' | 'squad_commander' | 'squad_member' | 'wing_commander';
    export const RoleEnum = {
        FleetCommander: 'fleet_commander' as RoleEnum,
        SquadCommander: 'squad_commander' as RoleEnum,
        SquadMember: 'squad_member' as RoleEnum,
        WingCommander: 'wing_commander' as RoleEnum
    }
}
