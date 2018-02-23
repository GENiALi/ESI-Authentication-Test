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
import { GetCorporationsCorporationIdStarbasesStarbaseIdFuel } from './getCorporationsCorporationIdStarbasesStarbaseIdFuel';


/**
 * 200 ok object
 */
export interface GetCorporationsCorporationIdStarbasesStarbaseIdOk {
    /**
     * Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme
     */
    fuelBayView: GetCorporationsCorporationIdStarbasesStarbaseIdOk.FuelBayViewEnum;
    /**
     * Who can take fuel blocks out of the starbase (POS)'s fuel bay
     */
    fuelBayTake: GetCorporationsCorporationIdStarbasesStarbaseIdOk.FuelBayTakeEnum;
    /**
     * Who can anchor starbase (POS) and its structures
     */
    anchor: GetCorporationsCorporationIdStarbasesStarbaseIdOk.AnchorEnum;
    /**
     * Who can unanchor starbase (POS) and its structures
     */
    unanchor: GetCorporationsCorporationIdStarbasesStarbaseIdOk.UnanchorEnum;
    /**
     * Who can online starbase (POS) and its structures
     */
    online: GetCorporationsCorporationIdStarbasesStarbaseIdOk.OnlineEnum;
    /**
     * Who can offline starbase (POS) and its structures
     */
    offline: GetCorporationsCorporationIdStarbasesStarbaseIdOk.OfflineEnum;
    /**
     * allow_corporation_members boolean
     */
    allowCorporationMembers: boolean;
    /**
     * allow_alliance_members boolean
     */
    allowAllianceMembers: boolean;
    /**
     * True if the starbase (POS) is using alliance standings, otherwise using corporation's
     */
    useAllianceStandings: boolean;
    /**
     * Starbase (POS) will attack if target's standing is lower than this value
     */
    attackStandingThreshold?: number;
    /**
     * Starbase (POS) will attack if target's security standing is lower than this value
     */
    attackSecurityStatusThreshold?: number;
    /**
     * attack_if_other_security_status_dropping boolean
     */
    attackIfOtherSecurityStatusDropping: boolean;
    /**
     * attack_if_at_war boolean
     */
    attackIfAtWar: boolean;
    /**
     * Fuel blocks and other things that will be consumed when operating a starbase (POS)
     */
    fuels?: Array<GetCorporationsCorporationIdStarbasesStarbaseIdFuel>;
}
export namespace GetCorporationsCorporationIdStarbasesStarbaseIdOk {
    export type FuelBayViewEnum = 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    export const FuelBayViewEnum = {
        AllianceMember: 'alliance_member' as FuelBayViewEnum,
        ConfigStarbaseEquipmentRole: 'config_starbase_equipment_role' as FuelBayViewEnum,
        CorporationMember: 'corporation_member' as FuelBayViewEnum,
        StarbaseFuelTechnicianRole: 'starbase_fuel_technician_role' as FuelBayViewEnum
    }
    export type FuelBayTakeEnum = 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    export const FuelBayTakeEnum = {
        AllianceMember: 'alliance_member' as FuelBayTakeEnum,
        ConfigStarbaseEquipmentRole: 'config_starbase_equipment_role' as FuelBayTakeEnum,
        CorporationMember: 'corporation_member' as FuelBayTakeEnum,
        StarbaseFuelTechnicianRole: 'starbase_fuel_technician_role' as FuelBayTakeEnum
    }
    export type AnchorEnum = 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    export const AnchorEnum = {
        AllianceMember: 'alliance_member' as AnchorEnum,
        ConfigStarbaseEquipmentRole: 'config_starbase_equipment_role' as AnchorEnum,
        CorporationMember: 'corporation_member' as AnchorEnum,
        StarbaseFuelTechnicianRole: 'starbase_fuel_technician_role' as AnchorEnum
    }
    export type UnanchorEnum = 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    export const UnanchorEnum = {
        AllianceMember: 'alliance_member' as UnanchorEnum,
        ConfigStarbaseEquipmentRole: 'config_starbase_equipment_role' as UnanchorEnum,
        CorporationMember: 'corporation_member' as UnanchorEnum,
        StarbaseFuelTechnicianRole: 'starbase_fuel_technician_role' as UnanchorEnum
    }
    export type OnlineEnum = 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    export const OnlineEnum = {
        AllianceMember: 'alliance_member' as OnlineEnum,
        ConfigStarbaseEquipmentRole: 'config_starbase_equipment_role' as OnlineEnum,
        CorporationMember: 'corporation_member' as OnlineEnum,
        StarbaseFuelTechnicianRole: 'starbase_fuel_technician_role' as OnlineEnum
    }
    export type OfflineEnum = 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    export const OfflineEnum = {
        AllianceMember: 'alliance_member' as OfflineEnum,
        ConfigStarbaseEquipmentRole: 'config_starbase_equipment_role' as OfflineEnum,
        CorporationMember: 'corporation_member' as OfflineEnum,
        StarbaseFuelTechnicianRole: 'starbase_fuel_technician_role' as OfflineEnum
    }
}
