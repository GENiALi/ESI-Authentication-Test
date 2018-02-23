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
 * muted object
 */
export interface GetCharactersCharacterIdChatChannelsMuted {
    /**
     * ID of a muted channel member
     */
    accessorId: number;
    /**
     * accessor_type string
     */
    accessorType: GetCharactersCharacterIdChatChannelsMuted.AccessorTypeEnum;
    /**
     * Reason this accessor is muted
     */
    reason?: string;
    /**
     * Time at which this accessor will no longer be muted
     */
    endAt?: Date;
}
export namespace GetCharactersCharacterIdChatChannelsMuted {
    export type AccessorTypeEnum = 'character' | 'corporation' | 'alliance';
    export const AccessorTypeEnum = {
        Character: 'character' as AccessorTypeEnum,
        Corporation: 'corporation' as AccessorTypeEnum,
        Alliance: 'alliance' as AccessorTypeEnum
    }
}
