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
export interface GetIndustryFacilities200Ok {
    /**
     * ID of the facility
     */
    facilityId: number;
    /**
     * Tax imposed by the facility
     */
    tax?: number;
    /**
     * Owner of the facility
     */
    ownerId: number;
    /**
     * Type ID of the facility
     */
    typeId: number;
    /**
     * Solar system ID where the facility is
     */
    solarSystemId: number;
    /**
     * Region ID where the facility is
     */
    regionId: number;
}
