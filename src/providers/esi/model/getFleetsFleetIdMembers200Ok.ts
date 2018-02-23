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
export interface GetFleetsFleetIdMembers200Ok {
    /**
     * character_id integer
     */
    characterId: number;
    /**
     * ship_type_id integer
     */
    shipTypeId: number;
    /**
     * ID of the wing the member is in. If not applicable, will be set to -1
     */
    wingId: number;
    /**
     * ID of the squad the member is in. If not applicable, will be set to -1
     */
    squadId: number;
    /**
     * Member’s role in fleet
     */
    role: GetFleetsFleetIdMembers200Ok.RoleEnum;
    /**
     * Localized role names
     */
    roleName: string;
    /**
     * join_time string
     */
    joinTime: Date;
    /**
     * Whether the member take fleet warps
     */
    takesFleetWarp: boolean;
    /**
     * Solar system the member is located in
     */
    solarSystemId: number;
    /**
     * Station in which the member is docked in, if applicable
     */
    stationId?: number;
}
export namespace GetFleetsFleetIdMembers200Ok {
    export type RoleEnum = 'fleet_commander' | 'wing_commander' | 'squad_commander' | 'squad_member';
    export const RoleEnum = {
        FleetCommander: 'fleet_commander' as RoleEnum,
        WingCommander: 'wing_commander' as RoleEnum,
        SquadCommander: 'squad_commander' as RoleEnum,
        SquadMember: 'squad_member' as RoleEnum
    }
}
