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
export interface GetCharactersCharacterIdIndustryJobs200Ok {
    /**
     * Unique job ID
     */
    jobId: number;
    /**
     * ID of the character which installed this job
     */
    installerId: number;
    /**
     * ID of the facility where this job is running
     */
    facilityId: number;
    /**
     * ID of the station where industry facility is located
     */
    stationId: number;
    /**
     * Job activity ID
     */
    activityId: number;
    /**
     * blueprint_id integer
     */
    blueprintId: number;
    /**
     * blueprint_type_id integer
     */
    blueprintTypeId: number;
    /**
     * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
     */
    blueprintLocationId: number;
    /**
     * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
     */
    outputLocationId: number;
    /**
     * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
     */
    runs: number;
    /**
     * The sume of job installation fee and industry facility tax
     */
    cost?: number;
    /**
     * Number of runs blueprint is licensed for
     */
    licensedRuns?: number;
    /**
     * Chance of success for invention
     */
    probability?: number;
    /**
     * Type ID of product (manufactured, copied or invented)
     */
    productTypeId?: number;
    /**
     * status string
     */
    status: GetCharactersCharacterIdIndustryJobs200Ok.StatusEnum;
    /**
     * Job duration in seconds
     */
    duration: number;
    /**
     * Date and time when this job started
     */
    startDate: Date;
    /**
     * Date and time when this job finished
     */
    endDate: Date;
    /**
     * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
     */
    pauseDate?: Date;
    /**
     * Date and time when this job was completed
     */
    completedDate?: Date;
    /**
     * ID of the character which completed this job
     */
    completedCharacterId?: number;
    /**
     * Number of successful runs for this job. Equal to runs unless this is an invention job
     */
    successfulRuns?: number;
}
export namespace GetCharactersCharacterIdIndustryJobs200Ok {
    export type StatusEnum = 'active' | 'cancelled' | 'delivered' | 'paused' | 'ready' | 'reverted';
    export const StatusEnum = {
        Active: 'active' as StatusEnum,
        Cancelled: 'cancelled' as StatusEnum,
        Delivered: 'delivered' as StatusEnum,
        Paused: 'paused' as StatusEnum,
        Ready: 'ready' as StatusEnum,
        Reverted: 'reverted' as StatusEnum
    }
}
