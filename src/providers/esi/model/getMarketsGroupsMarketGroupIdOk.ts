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
export interface GetMarketsGroupsMarketGroupIdOk {
    /**
     * market_group_id integer
     */
    marketGroupId: number;
    /**
     * name string
     */
    name: string;
    /**
     * description string
     */
    description: string;
    /**
     * types array
     */
    types: Array<number>;
    /**
     * parent_group_id integer
     */
    parentGroupId?: number;
}
