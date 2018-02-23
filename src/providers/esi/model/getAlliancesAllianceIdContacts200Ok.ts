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
export interface GetAlliancesAllianceIdContacts200Ok {
    /**
     * Standing of the contact
     */
    standing: number;
    /**
     * contact_type string
     */
    contactType: GetAlliancesAllianceIdContacts200Ok.ContactTypeEnum;
    /**
     * contact_id integer
     */
    contactId: number;
    /**
     * Custom label of the contact
     */
    labelId?: number;
}
export namespace GetAlliancesAllianceIdContacts200Ok {
    export type ContactTypeEnum = 'character' | 'corporation' | 'alliance' | 'faction';
    export const ContactTypeEnum = {
        Character: 'character' as ContactTypeEnum,
        Corporation: 'corporation' as ContactTypeEnum,
        Alliance: 'alliance' as ContactTypeEnum,
        Faction: 'faction' as ContactTypeEnum
    }
}
