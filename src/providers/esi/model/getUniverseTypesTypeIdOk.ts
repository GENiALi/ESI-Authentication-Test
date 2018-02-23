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
import { GetUniverseTypesTypeIdDogmaAttribute } from './getUniverseTypesTypeIdDogmaAttribute';
import { GetUniverseTypesTypeIdDogmaEffect } from './getUniverseTypesTypeIdDogmaEffect';


/**
 * 200 ok object
 */
export interface GetUniverseTypesTypeIdOk {
    /**
     * type_id integer
     */
    typeId: number;
    /**
     * name string
     */
    name: string;
    /**
     * description string
     */
    description: string;
    /**
     * published boolean
     */
    published: boolean;
    /**
     * group_id integer
     */
    groupId: number;
    /**
     * This only exists for types that can be put on the market
     */
    marketGroupId?: number;
    /**
     * radius number
     */
    radius?: number;
    /**
     * volume number
     */
    volume?: number;
    /**
     * packaged_volume number
     */
    packagedVolume?: number;
    /**
     * icon_id integer
     */
    iconId?: number;
    /**
     * capacity number
     */
    capacity?: number;
    /**
     * portion_size integer
     */
    portionSize?: number;
    /**
     * mass number
     */
    mass?: number;
    /**
     * graphic_id integer
     */
    graphicId?: number;
    /**
     * dogma_attributes array
     */
    dogmaAttributes?: Array<GetUniverseTypesTypeIdDogmaAttribute>;
    /**
     * dogma_effects array
     */
    dogmaEffects?: Array<GetUniverseTypesTypeIdDogmaEffect>;
}
