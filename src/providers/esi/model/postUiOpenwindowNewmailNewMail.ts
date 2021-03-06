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
 * new_mail object
 */
export interface PostUiOpenwindowNewmailNewMail {
    /**
     * subject string
     */
    subject: string;
    /**
     * body string
     */
    body: string;
    /**
     * recipients array
     */
    recipients: Array<number>;
    /**
     * Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field
     */
    toMailingListId?: number;
    /**
     * to_corp_or_alliance_id integer
     */
    toCorpOrAllianceId?: number;
}
