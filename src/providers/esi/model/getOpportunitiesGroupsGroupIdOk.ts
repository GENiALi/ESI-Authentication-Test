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
export interface GetOpportunitiesGroupsGroupIdOk {
    /**
     * group_id integer
     */
    groupId: number;
    /**
     * name string
     */
    name: string;
    /**
     * description string
     */
    description: string;
    /**
     * notification string
     */
    notification: string;
    /**
     * Tasks need to complete for this group
     */
    requiredTasks: Array<number>;
    /**
     * The groups that are connected to this group on the opportunities map
     */
    connectedGroups: Array<number>;
}
