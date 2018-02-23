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
export interface GetCorporationsCorporationIdRolesHistory200Ok {
    /**
     * The character whose roles are changed
     */
    characterId: number;
    /**
     * changed_at string
     */
    changedAt: Date;
    /**
     * ID of the character who issued this change
     */
    issuerId: number;
    /**
     * role_type string
     */
    roleType: GetCorporationsCorporationIdRolesHistory200Ok.RoleTypeEnum;
    /**
     * old_roles array
     */
    oldRoles: Array<GetCorporationsCorporationIdRolesHistory200Ok.OldRolesEnum>;
    /**
     * new_roles array
     */
    newRoles: Array<GetCorporationsCorporationIdRolesHistory200Ok.NewRolesEnum>;
}
export namespace GetCorporationsCorporationIdRolesHistory200Ok {
    export type RoleTypeEnum = 'grantable_roles' | 'grantable_roles_at_base' | 'grantable_roles_at_hq' | 'grantable_roles_at_other' | 'roles' | 'roles_at_base' | 'roles_at_hq' | 'roles_at_other';
    export const RoleTypeEnum = {
        GrantableRoles: 'grantable_roles' as RoleTypeEnum,
        GrantableRolesAtBase: 'grantable_roles_at_base' as RoleTypeEnum,
        GrantableRolesAtHq: 'grantable_roles_at_hq' as RoleTypeEnum,
        GrantableRolesAtOther: 'grantable_roles_at_other' as RoleTypeEnum,
        Roles: 'roles' as RoleTypeEnum,
        RolesAtBase: 'roles_at_base' as RoleTypeEnum,
        RolesAtHq: 'roles_at_hq' as RoleTypeEnum,
        RolesAtOther: 'roles_at_other' as RoleTypeEnum
    }
    export type OldRolesEnum = 'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Terrestrial_Combat_Officer' | 'Terrestrial_Logistics_Officer' | 'Trader';
    export const OldRolesEnum = {
        AccountTake1: 'Account_Take_1' as OldRolesEnum,
        AccountTake2: 'Account_Take_2' as OldRolesEnum,
        AccountTake3: 'Account_Take_3' as OldRolesEnum,
        AccountTake4: 'Account_Take_4' as OldRolesEnum,
        AccountTake5: 'Account_Take_5' as OldRolesEnum,
        AccountTake6: 'Account_Take_6' as OldRolesEnum,
        AccountTake7: 'Account_Take_7' as OldRolesEnum,
        Accountant: 'Accountant' as OldRolesEnum,
        Auditor: 'Auditor' as OldRolesEnum,
        CommunicationsOfficer: 'Communications_Officer' as OldRolesEnum,
        ConfigEquipment: 'Config_Equipment' as OldRolesEnum,
        ConfigStarbaseEquipment: 'Config_Starbase_Equipment' as OldRolesEnum,
        ContainerTake1: 'Container_Take_1' as OldRolesEnum,
        ContainerTake2: 'Container_Take_2' as OldRolesEnum,
        ContainerTake3: 'Container_Take_3' as OldRolesEnum,
        ContainerTake4: 'Container_Take_4' as OldRolesEnum,
        ContainerTake5: 'Container_Take_5' as OldRolesEnum,
        ContainerTake6: 'Container_Take_6' as OldRolesEnum,
        ContainerTake7: 'Container_Take_7' as OldRolesEnum,
        ContractManager: 'Contract_Manager' as OldRolesEnum,
        Diplomat: 'Diplomat' as OldRolesEnum,
        Director: 'Director' as OldRolesEnum,
        FactoryManager: 'Factory_Manager' as OldRolesEnum,
        FittingManager: 'Fitting_Manager' as OldRolesEnum,
        HangarQuery1: 'Hangar_Query_1' as OldRolesEnum,
        HangarQuery2: 'Hangar_Query_2' as OldRolesEnum,
        HangarQuery3: 'Hangar_Query_3' as OldRolesEnum,
        HangarQuery4: 'Hangar_Query_4' as OldRolesEnum,
        HangarQuery5: 'Hangar_Query_5' as OldRolesEnum,
        HangarQuery6: 'Hangar_Query_6' as OldRolesEnum,
        HangarQuery7: 'Hangar_Query_7' as OldRolesEnum,
        HangarTake1: 'Hangar_Take_1' as OldRolesEnum,
        HangarTake2: 'Hangar_Take_2' as OldRolesEnum,
        HangarTake3: 'Hangar_Take_3' as OldRolesEnum,
        HangarTake4: 'Hangar_Take_4' as OldRolesEnum,
        HangarTake5: 'Hangar_Take_5' as OldRolesEnum,
        HangarTake6: 'Hangar_Take_6' as OldRolesEnum,
        HangarTake7: 'Hangar_Take_7' as OldRolesEnum,
        JuniorAccountant: 'Junior_Accountant' as OldRolesEnum,
        PersonnelManager: 'Personnel_Manager' as OldRolesEnum,
        RentFactoryFacility: 'Rent_Factory_Facility' as OldRolesEnum,
        RentOffice: 'Rent_Office' as OldRolesEnum,
        RentResearchFacility: 'Rent_Research_Facility' as OldRolesEnum,
        SecurityOfficer: 'Security_Officer' as OldRolesEnum,
        StarbaseDefenseOperator: 'Starbase_Defense_Operator' as OldRolesEnum,
        StarbaseFuelTechnician: 'Starbase_Fuel_Technician' as OldRolesEnum,
        StationManager: 'Station_Manager' as OldRolesEnum,
        TerrestrialCombatOfficer: 'Terrestrial_Combat_Officer' as OldRolesEnum,
        TerrestrialLogisticsOfficer: 'Terrestrial_Logistics_Officer' as OldRolesEnum,
        Trader: 'Trader' as OldRolesEnum
    }
    export type NewRolesEnum = 'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Terrestrial_Combat_Officer' | 'Terrestrial_Logistics_Officer' | 'Trader';
    export const NewRolesEnum = {
        AccountTake1: 'Account_Take_1' as NewRolesEnum,
        AccountTake2: 'Account_Take_2' as NewRolesEnum,
        AccountTake3: 'Account_Take_3' as NewRolesEnum,
        AccountTake4: 'Account_Take_4' as NewRolesEnum,
        AccountTake5: 'Account_Take_5' as NewRolesEnum,
        AccountTake6: 'Account_Take_6' as NewRolesEnum,
        AccountTake7: 'Account_Take_7' as NewRolesEnum,
        Accountant: 'Accountant' as NewRolesEnum,
        Auditor: 'Auditor' as NewRolesEnum,
        CommunicationsOfficer: 'Communications_Officer' as NewRolesEnum,
        ConfigEquipment: 'Config_Equipment' as NewRolesEnum,
        ConfigStarbaseEquipment: 'Config_Starbase_Equipment' as NewRolesEnum,
        ContainerTake1: 'Container_Take_1' as NewRolesEnum,
        ContainerTake2: 'Container_Take_2' as NewRolesEnum,
        ContainerTake3: 'Container_Take_3' as NewRolesEnum,
        ContainerTake4: 'Container_Take_4' as NewRolesEnum,
        ContainerTake5: 'Container_Take_5' as NewRolesEnum,
        ContainerTake6: 'Container_Take_6' as NewRolesEnum,
        ContainerTake7: 'Container_Take_7' as NewRolesEnum,
        ContractManager: 'Contract_Manager' as NewRolesEnum,
        Diplomat: 'Diplomat' as NewRolesEnum,
        Director: 'Director' as NewRolesEnum,
        FactoryManager: 'Factory_Manager' as NewRolesEnum,
        FittingManager: 'Fitting_Manager' as NewRolesEnum,
        HangarQuery1: 'Hangar_Query_1' as NewRolesEnum,
        HangarQuery2: 'Hangar_Query_2' as NewRolesEnum,
        HangarQuery3: 'Hangar_Query_3' as NewRolesEnum,
        HangarQuery4: 'Hangar_Query_4' as NewRolesEnum,
        HangarQuery5: 'Hangar_Query_5' as NewRolesEnum,
        HangarQuery6: 'Hangar_Query_6' as NewRolesEnum,
        HangarQuery7: 'Hangar_Query_7' as NewRolesEnum,
        HangarTake1: 'Hangar_Take_1' as NewRolesEnum,
        HangarTake2: 'Hangar_Take_2' as NewRolesEnum,
        HangarTake3: 'Hangar_Take_3' as NewRolesEnum,
        HangarTake4: 'Hangar_Take_4' as NewRolesEnum,
        HangarTake5: 'Hangar_Take_5' as NewRolesEnum,
        HangarTake6: 'Hangar_Take_6' as NewRolesEnum,
        HangarTake7: 'Hangar_Take_7' as NewRolesEnum,
        JuniorAccountant: 'Junior_Accountant' as NewRolesEnum,
        PersonnelManager: 'Personnel_Manager' as NewRolesEnum,
        RentFactoryFacility: 'Rent_Factory_Facility' as NewRolesEnum,
        RentOffice: 'Rent_Office' as NewRolesEnum,
        RentResearchFacility: 'Rent_Research_Facility' as NewRolesEnum,
        SecurityOfficer: 'Security_Officer' as NewRolesEnum,
        StarbaseDefenseOperator: 'Starbase_Defense_Operator' as NewRolesEnum,
        StarbaseFuelTechnician: 'Starbase_Fuel_Technician' as NewRolesEnum,
        StationManager: 'Station_Manager' as NewRolesEnum,
        TerrestrialCombatOfficer: 'Terrestrial_Combat_Officer' as NewRolesEnum,
        TerrestrialLogisticsOfficer: 'Terrestrial_Logistics_Officer' as NewRolesEnum,
        Trader: 'Trader' as NewRolesEnum
    }
}
