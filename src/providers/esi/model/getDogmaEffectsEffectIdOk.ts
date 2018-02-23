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
import { GetDogmaEffectsEffectIdModifier } from './getDogmaEffectsEffectIdModifier';


/**
 * 200 ok object
 */
export interface GetDogmaEffectsEffectIdOk {
    /**
     * effect_id integer
     */
    effectId: number;
    /**
     * name string
     */
    name?: string;
    /**
     * display_name string
     */
    displayName?: string;
    /**
     * description string
     */
    description?: string;
    /**
     * icon_id integer
     */
    iconId?: number;
    /**
     * effect_category integer
     */
    effectCategory?: number;
    /**
     * pre_expression integer
     */
    preExpression?: number;
    /**
     * post_expression integer
     */
    postExpression?: number;
    /**
     * is_offensive boolean
     */
    isOffensive?: boolean;
    /**
     * is_assistance boolean
     */
    isAssistance?: boolean;
    /**
     * disallow_auto_repeat boolean
     */
    disallowAutoRepeat?: boolean;
    /**
     * published boolean
     */
    published?: boolean;
    /**
     * is_warp_safe boolean
     */
    isWarpSafe?: boolean;
    /**
     * range_chance boolean
     */
    rangeChance?: boolean;
    /**
     * electronic_chance boolean
     */
    electronicChance?: boolean;
    /**
     * duration_attribute_id integer
     */
    durationAttributeId?: number;
    /**
     * tracking_speed_attribute_id integer
     */
    trackingSpeedAttributeId?: number;
    /**
     * discharge_attribute_id integer
     */
    dischargeAttributeId?: number;
    /**
     * range_attribute_id integer
     */
    rangeAttributeId?: number;
    /**
     * falloff_attribute_id integer
     */
    falloffAttributeId?: number;
    /**
     * modifiers array
     */
    modifiers?: Array<GetDogmaEffectsEffectIdModifier>;
}
