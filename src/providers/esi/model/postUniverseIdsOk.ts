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
import { PostUniverseIdsAgent } from './postUniverseIdsAgent';
import { PostUniverseIdsAlliance } from './postUniverseIdsAlliance';
import { PostUniverseIdsCharacter } from './postUniverseIdsCharacter';
import { PostUniverseIdsConstellation } from './postUniverseIdsConstellation';
import { PostUniverseIdsCorporation } from './postUniverseIdsCorporation';
import { PostUniverseIdsFaction } from './postUniverseIdsFaction';
import { PostUniverseIdsInventoryType } from './postUniverseIdsInventoryType';
import { PostUniverseIdsRegion } from './postUniverseIdsRegion';
import { PostUniverseIdsStation } from './postUniverseIdsStation';
import { PostUniverseIdsSystem } from './postUniverseIdsSystem';


/**
 * 200 ok object
 */
export interface PostUniverseIdsOk {
    /**
     * agents array
     */
    agents?: Array<PostUniverseIdsAgent>;
    /**
     * alliances array
     */
    alliances?: Array<PostUniverseIdsAlliance>;
    /**
     * characters array
     */
    characters?: Array<PostUniverseIdsCharacter>;
    /**
     * constellations array
     */
    constellations?: Array<PostUniverseIdsConstellation>;
    /**
     * corporations array
     */
    corporations?: Array<PostUniverseIdsCorporation>;
    /**
     * factions array
     */
    factions?: Array<PostUniverseIdsFaction>;
    /**
     * inventory_types array
     */
    inventoryTypes?: Array<PostUniverseIdsInventoryType>;
    /**
     * regions array
     */
    regions?: Array<PostUniverseIdsRegion>;
    /**
     * systems array
     */
    systems?: Array<PostUniverseIdsSystem>;
    /**
     * stations array
     */
    stations?: Array<PostUniverseIdsStation>;
}
