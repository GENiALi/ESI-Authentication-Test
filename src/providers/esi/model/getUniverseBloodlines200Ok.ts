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
export interface GetUniverseBloodlines200Ok {
    /**
     * bloodline_id integer
     */
    bloodlineId: number;
    /**
     * name string
     */
    name: string;
    /**
     * description string
     */
    description: string;
    /**
     * race_id integer
     */
    raceId: number;
    /**
     * ship_type_id integer
     */
    shipTypeId: number;
    /**
     * corporation_id integer
     */
    corporationId: number;
    /**
     * perception integer
     */
    perception: number;
    /**
     * willpower integer
     */
    willpower: number;
    /**
     * charisma integer
     */
    charisma: number;
    /**
     * memory integer
     */
    memory: number;
    /**
     * intelligence integer
     */
    intelligence: number;
}
