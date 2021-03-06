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
export interface GetCharactersCharacterIdNotifications200Ok {
    /**
     * notification_id integer
     */
    notificationId: number;
    /**
     * sender_id integer
     */
    senderId: number;
    /**
     * sender_type string
     */
    senderType: GetCharactersCharacterIdNotifications200Ok.SenderTypeEnum;
    /**
     * timestamp string
     */
    timestamp: Date;
    /**
     * is_read boolean
     */
    isRead?: boolean;
    /**
     * text string
     */
    text?: string;
    /**
     * type string
     */
    type: GetCharactersCharacterIdNotifications200Ok.TypeEnum;
}
export namespace GetCharactersCharacterIdNotifications200Ok {
    export type SenderTypeEnum = 'character' | 'corporation' | 'alliance' | 'faction' | 'other';
    export const SenderTypeEnum = {
        Character: 'character' as SenderTypeEnum,
        Corporation: 'corporation' as SenderTypeEnum,
        Alliance: 'alliance' as SenderTypeEnum,
        Faction: 'faction' as SenderTypeEnum,
        Other: 'other' as SenderTypeEnum
    }
    export type TypeEnum = 'AcceptedAlly' | 'AcceptedSurrender' | 'AllAnchoringMsg' | 'AllMaintenanceBillMsg' | 'AllStrucInvulnerableMsg' | 'AllStructVulnerableMsg' | 'AllWarCorpJoinedAllianceMsg' | 'AllWarDeclaredMsg' | 'AllWarInvalidatedMsg' | 'AllWarRetractedMsg' | 'AllWarSurrenderMsg' | 'AllianceCapitalChanged' | 'AllyContractCancelled' | 'AllyJoinedWarAggressorMsg' | 'AllyJoinedWarAllyMsg' | 'AllyJoinedWarDefenderMsg' | 'BattlePunishFriendlyFire' | 'BillOutOfMoneyMsg' | 'BillPaidCorpAllMsg' | 'BountyClaimMsg' | 'BountyESSShared' | 'BountyESSTaken' | 'BountyPlacedAlliance' | 'BountyPlacedChar' | 'BountyPlacedCorp' | 'BountyYourBountyClaimed' | 'BuddyConnectContactAdd' | 'CharAppAcceptMsg' | 'CharAppRejectMsg' | 'CharAppWithdrawMsg' | 'CharLeftCorpMsg' | 'CharMedalMsg' | 'CharTerminationMsg' | 'CloneActivationMsg' | 'CloneActivationMsg2' | 'CloneMovedMsg' | 'CloneRevokedMsg1' | 'CloneRevokedMsg2' | 'ContactAdd' | 'ContactEdit' | 'ContainerPasswordMsg' | 'CorpAllBillMsg' | 'CorpAppAcceptMsg' | 'CorpAppInvitedMsg' | 'CorpAppNewMsg' | 'CorpAppRejectCustomMsg' | 'CorpAppRejectMsg' | 'CorpDividendMsg' | 'CorpFriendlyFireDisableTimerCompleted' | 'CorpFriendlyFireDisableTimerStarted' | 'CorpFriendlyFireEnableTimerCompleted' | 'CorpFriendlyFireEnableTimerStarted' | 'CorpKicked' | 'CorpLiquidationMsg' | 'CorpNewCEOMsg' | 'CorpNewsMsg' | 'CorpOfficeExpirationMsg' | 'CorpStructLostMsg' | 'CorpTaxChangeMsg' | 'CorpVoteCEORevokedMsg' | 'CorpVoteMsg' | 'CorpWarDeclaredMsg' | 'CorpWarFightingLegalMsg' | 'CorpWarInvalidatedMsg' | 'CorpWarRetractedMsg' | 'CorpWarSurrenderMsg' | 'CustomsMsg' | 'DeclareWar' | 'DistrictAttacked' | 'DustAppAcceptedMsg' | 'EntosisCaptureStarted' | 'FWAllianceKickMsg' | 'FWAllianceWarningMsg' | 'FWCharKickMsg' | 'FWCharRankGainMsg' | 'FWCharRankLossMsg' | 'FWCharWarningMsg' | 'FWCorpJoinMsg' | 'FWCorpKickMsg' | 'FWCorpLeaveMsg' | 'FWCorpWarningMsg' | 'FacWarCorpJoinRequestMsg' | 'FacWarCorpJoinWithdrawMsg' | 'FacWarCorpLeaveRequestMsg' | 'FacWarCorpLeaveWithdrawMsg' | 'FacWarLPDisqualifiedEvent' | 'FacWarLPDisqualifiedKill' | 'FacWarLPPayoutEvent' | 'FacWarLPPayoutKill' | 'GameTimeAdded' | 'GameTimeReceived' | 'GameTimeSent' | 'GiftReceived' | 'IHubDestroyedByBillFailure' | 'IncursionCompletedMsg' | 'IndustryTeamAuctionLost' | 'IndustryTeamAuctionWon' | 'InfrastructureHubBillAboutToExpire' | 'InsuranceExpirationMsg' | 'InsuranceFirstShipMsg' | 'InsuranceInvalidatedMsg' | 'InsuranceIssuedMsg' | 'InsurancePayoutMsg' | 'JumpCloneDeletedMsg1' | 'JumpCloneDeletedMsg2' | 'KillReportFinalBlow' | 'KillReportVictim' | 'KillRightAvailable' | 'KillRightAvailableOpen' | 'KillRightEarned' | 'KillRightUnavailable' | 'KillRightUnavailableOpen' | 'KillRightUsed' | 'LocateCharMsg' | 'MadeWarMutual' | 'MercOfferedNegotiationMsg' | 'MissionOfferExpirationMsg' | 'MissionTimeoutMsg' | 'MoonminingAutomaticFracture' | 'MoonminingExtractionCancelled' | 'MoonminingExtractionFinished' | 'MoonminingLaserFired' | 'NPCStandingsGained' | 'NPCStandingsLost' | 'OfferedSurrender' | 'OfferedToAlly' | 'OldLscMessages' | 'OperationFinished' | 'OrbitalAttacked' | 'OrbitalReinforced' | 'OwnershipTransferred' | 'ReimbursementMsg' | 'ResearchMissionAvailableMsg' | 'RetractsWar' | 'SeasonalChallengeCompleted' | 'SovAllClaimAquiredMsg' | 'SovAllClaimLostMsg' | 'SovCommandNodeEventStarted' | 'SovCorpBillLateMsg' | 'SovCorpClaimFailMsg' | 'SovDisruptorMsg' | 'SovStationEnteredFreeport' | 'SovStructureDestroyed' | 'SovStructureReinforced' | 'SovStructureSelfDestructCancel' | 'SovStructureSelfDestructFinished' | 'SovStructureSelfDestructRequested' | 'SovereigntyIHDamageMsg' | 'SovereigntySBUDamageMsg' | 'SovereigntyTCUDamageMsg' | 'StationAggressionMsg1' | 'StationAggressionMsg2' | 'StationConquerMsg' | 'StationServiceDisabled' | 'StationServiceEnabled' | 'StationStateChangeMsg' | 'StoryLineMissionAvailableMsg' | 'StructureAnchoring' | 'StructureCourierContractChanged' | 'StructureDestroyed' | 'StructureFuelAlert' | 'StructureItemsDelivered' | 'StructureLostArmor' | 'StructureLostShields' | 'StructureOnline' | 'StructureServicesOffline' | 'StructureUnanchoring' | 'StructureUnderAttack' | 'TowerAlertMsg' | 'TowerResourceAlertMsg' | 'TransactionReversalMsg' | 'TutorialMsg' | 'WarAllyOfferDeclinedMsg' | 'WarSurrenderDeclinedMsg' | 'WarSurrenderOfferMsg' | 'notificationTypeMoonminingExtractionStarted';
    export const TypeEnum = {
        AcceptedAlly: 'AcceptedAlly' as TypeEnum,
        AcceptedSurrender: 'AcceptedSurrender' as TypeEnum,
        AllAnchoringMsg: 'AllAnchoringMsg' as TypeEnum,
        AllMaintenanceBillMsg: 'AllMaintenanceBillMsg' as TypeEnum,
        AllStrucInvulnerableMsg: 'AllStrucInvulnerableMsg' as TypeEnum,
        AllStructVulnerableMsg: 'AllStructVulnerableMsg' as TypeEnum,
        AllWarCorpJoinedAllianceMsg: 'AllWarCorpJoinedAllianceMsg' as TypeEnum,
        AllWarDeclaredMsg: 'AllWarDeclaredMsg' as TypeEnum,
        AllWarInvalidatedMsg: 'AllWarInvalidatedMsg' as TypeEnum,
        AllWarRetractedMsg: 'AllWarRetractedMsg' as TypeEnum,
        AllWarSurrenderMsg: 'AllWarSurrenderMsg' as TypeEnum,
        AllianceCapitalChanged: 'AllianceCapitalChanged' as TypeEnum,
        AllyContractCancelled: 'AllyContractCancelled' as TypeEnum,
        AllyJoinedWarAggressorMsg: 'AllyJoinedWarAggressorMsg' as TypeEnum,
        AllyJoinedWarAllyMsg: 'AllyJoinedWarAllyMsg' as TypeEnum,
        AllyJoinedWarDefenderMsg: 'AllyJoinedWarDefenderMsg' as TypeEnum,
        BattlePunishFriendlyFire: 'BattlePunishFriendlyFire' as TypeEnum,
        BillOutOfMoneyMsg: 'BillOutOfMoneyMsg' as TypeEnum,
        BillPaidCorpAllMsg: 'BillPaidCorpAllMsg' as TypeEnum,
        BountyClaimMsg: 'BountyClaimMsg' as TypeEnum,
        BountyESSShared: 'BountyESSShared' as TypeEnum,
        BountyESSTaken: 'BountyESSTaken' as TypeEnum,
        BountyPlacedAlliance: 'BountyPlacedAlliance' as TypeEnum,
        BountyPlacedChar: 'BountyPlacedChar' as TypeEnum,
        BountyPlacedCorp: 'BountyPlacedCorp' as TypeEnum,
        BountyYourBountyClaimed: 'BountyYourBountyClaimed' as TypeEnum,
        BuddyConnectContactAdd: 'BuddyConnectContactAdd' as TypeEnum,
        CharAppAcceptMsg: 'CharAppAcceptMsg' as TypeEnum,
        CharAppRejectMsg: 'CharAppRejectMsg' as TypeEnum,
        CharAppWithdrawMsg: 'CharAppWithdrawMsg' as TypeEnum,
        CharLeftCorpMsg: 'CharLeftCorpMsg' as TypeEnum,
        CharMedalMsg: 'CharMedalMsg' as TypeEnum,
        CharTerminationMsg: 'CharTerminationMsg' as TypeEnum,
        CloneActivationMsg: 'CloneActivationMsg' as TypeEnum,
        CloneActivationMsg2: 'CloneActivationMsg2' as TypeEnum,
        CloneMovedMsg: 'CloneMovedMsg' as TypeEnum,
        CloneRevokedMsg1: 'CloneRevokedMsg1' as TypeEnum,
        CloneRevokedMsg2: 'CloneRevokedMsg2' as TypeEnum,
        ContactAdd: 'ContactAdd' as TypeEnum,
        ContactEdit: 'ContactEdit' as TypeEnum,
        ContainerPasswordMsg: 'ContainerPasswordMsg' as TypeEnum,
        CorpAllBillMsg: 'CorpAllBillMsg' as TypeEnum,
        CorpAppAcceptMsg: 'CorpAppAcceptMsg' as TypeEnum,
        CorpAppInvitedMsg: 'CorpAppInvitedMsg' as TypeEnum,
        CorpAppNewMsg: 'CorpAppNewMsg' as TypeEnum,
        CorpAppRejectCustomMsg: 'CorpAppRejectCustomMsg' as TypeEnum,
        CorpAppRejectMsg: 'CorpAppRejectMsg' as TypeEnum,
        CorpDividendMsg: 'CorpDividendMsg' as TypeEnum,
        CorpFriendlyFireDisableTimerCompleted: 'CorpFriendlyFireDisableTimerCompleted' as TypeEnum,
        CorpFriendlyFireDisableTimerStarted: 'CorpFriendlyFireDisableTimerStarted' as TypeEnum,
        CorpFriendlyFireEnableTimerCompleted: 'CorpFriendlyFireEnableTimerCompleted' as TypeEnum,
        CorpFriendlyFireEnableTimerStarted: 'CorpFriendlyFireEnableTimerStarted' as TypeEnum,
        CorpKicked: 'CorpKicked' as TypeEnum,
        CorpLiquidationMsg: 'CorpLiquidationMsg' as TypeEnum,
        CorpNewCEOMsg: 'CorpNewCEOMsg' as TypeEnum,
        CorpNewsMsg: 'CorpNewsMsg' as TypeEnum,
        CorpOfficeExpirationMsg: 'CorpOfficeExpirationMsg' as TypeEnum,
        CorpStructLostMsg: 'CorpStructLostMsg' as TypeEnum,
        CorpTaxChangeMsg: 'CorpTaxChangeMsg' as TypeEnum,
        CorpVoteCEORevokedMsg: 'CorpVoteCEORevokedMsg' as TypeEnum,
        CorpVoteMsg: 'CorpVoteMsg' as TypeEnum,
        CorpWarDeclaredMsg: 'CorpWarDeclaredMsg' as TypeEnum,
        CorpWarFightingLegalMsg: 'CorpWarFightingLegalMsg' as TypeEnum,
        CorpWarInvalidatedMsg: 'CorpWarInvalidatedMsg' as TypeEnum,
        CorpWarRetractedMsg: 'CorpWarRetractedMsg' as TypeEnum,
        CorpWarSurrenderMsg: 'CorpWarSurrenderMsg' as TypeEnum,
        CustomsMsg: 'CustomsMsg' as TypeEnum,
        DeclareWar: 'DeclareWar' as TypeEnum,
        DistrictAttacked: 'DistrictAttacked' as TypeEnum,
        DustAppAcceptedMsg: 'DustAppAcceptedMsg' as TypeEnum,
        EntosisCaptureStarted: 'EntosisCaptureStarted' as TypeEnum,
        FWAllianceKickMsg: 'FWAllianceKickMsg' as TypeEnum,
        FWAllianceWarningMsg: 'FWAllianceWarningMsg' as TypeEnum,
        FWCharKickMsg: 'FWCharKickMsg' as TypeEnum,
        FWCharRankGainMsg: 'FWCharRankGainMsg' as TypeEnum,
        FWCharRankLossMsg: 'FWCharRankLossMsg' as TypeEnum,
        FWCharWarningMsg: 'FWCharWarningMsg' as TypeEnum,
        FWCorpJoinMsg: 'FWCorpJoinMsg' as TypeEnum,
        FWCorpKickMsg: 'FWCorpKickMsg' as TypeEnum,
        FWCorpLeaveMsg: 'FWCorpLeaveMsg' as TypeEnum,
        FWCorpWarningMsg: 'FWCorpWarningMsg' as TypeEnum,
        FacWarCorpJoinRequestMsg: 'FacWarCorpJoinRequestMsg' as TypeEnum,
        FacWarCorpJoinWithdrawMsg: 'FacWarCorpJoinWithdrawMsg' as TypeEnum,
        FacWarCorpLeaveRequestMsg: 'FacWarCorpLeaveRequestMsg' as TypeEnum,
        FacWarCorpLeaveWithdrawMsg: 'FacWarCorpLeaveWithdrawMsg' as TypeEnum,
        FacWarLPDisqualifiedEvent: 'FacWarLPDisqualifiedEvent' as TypeEnum,
        FacWarLPDisqualifiedKill: 'FacWarLPDisqualifiedKill' as TypeEnum,
        FacWarLPPayoutEvent: 'FacWarLPPayoutEvent' as TypeEnum,
        FacWarLPPayoutKill: 'FacWarLPPayoutKill' as TypeEnum,
        GameTimeAdded: 'GameTimeAdded' as TypeEnum,
        GameTimeReceived: 'GameTimeReceived' as TypeEnum,
        GameTimeSent: 'GameTimeSent' as TypeEnum,
        GiftReceived: 'GiftReceived' as TypeEnum,
        IHubDestroyedByBillFailure: 'IHubDestroyedByBillFailure' as TypeEnum,
        IncursionCompletedMsg: 'IncursionCompletedMsg' as TypeEnum,
        IndustryTeamAuctionLost: 'IndustryTeamAuctionLost' as TypeEnum,
        IndustryTeamAuctionWon: 'IndustryTeamAuctionWon' as TypeEnum,
        InfrastructureHubBillAboutToExpire: 'InfrastructureHubBillAboutToExpire' as TypeEnum,
        InsuranceExpirationMsg: 'InsuranceExpirationMsg' as TypeEnum,
        InsuranceFirstShipMsg: 'InsuranceFirstShipMsg' as TypeEnum,
        InsuranceInvalidatedMsg: 'InsuranceInvalidatedMsg' as TypeEnum,
        InsuranceIssuedMsg: 'InsuranceIssuedMsg' as TypeEnum,
        InsurancePayoutMsg: 'InsurancePayoutMsg' as TypeEnum,
        JumpCloneDeletedMsg1: 'JumpCloneDeletedMsg1' as TypeEnum,
        JumpCloneDeletedMsg2: 'JumpCloneDeletedMsg2' as TypeEnum,
        KillReportFinalBlow: 'KillReportFinalBlow' as TypeEnum,
        KillReportVictim: 'KillReportVictim' as TypeEnum,
        KillRightAvailable: 'KillRightAvailable' as TypeEnum,
        KillRightAvailableOpen: 'KillRightAvailableOpen' as TypeEnum,
        KillRightEarned: 'KillRightEarned' as TypeEnum,
        KillRightUnavailable: 'KillRightUnavailable' as TypeEnum,
        KillRightUnavailableOpen: 'KillRightUnavailableOpen' as TypeEnum,
        KillRightUsed: 'KillRightUsed' as TypeEnum,
        LocateCharMsg: 'LocateCharMsg' as TypeEnum,
        MadeWarMutual: 'MadeWarMutual' as TypeEnum,
        MercOfferedNegotiationMsg: 'MercOfferedNegotiationMsg' as TypeEnum,
        MissionOfferExpirationMsg: 'MissionOfferExpirationMsg' as TypeEnum,
        MissionTimeoutMsg: 'MissionTimeoutMsg' as TypeEnum,
        MoonminingAutomaticFracture: 'MoonminingAutomaticFracture' as TypeEnum,
        MoonminingExtractionCancelled: 'MoonminingExtractionCancelled' as TypeEnum,
        MoonminingExtractionFinished: 'MoonminingExtractionFinished' as TypeEnum,
        MoonminingLaserFired: 'MoonminingLaserFired' as TypeEnum,
        NPCStandingsGained: 'NPCStandingsGained' as TypeEnum,
        NPCStandingsLost: 'NPCStandingsLost' as TypeEnum,
        OfferedSurrender: 'OfferedSurrender' as TypeEnum,
        OfferedToAlly: 'OfferedToAlly' as TypeEnum,
        OldLscMessages: 'OldLscMessages' as TypeEnum,
        OperationFinished: 'OperationFinished' as TypeEnum,
        OrbitalAttacked: 'OrbitalAttacked' as TypeEnum,
        OrbitalReinforced: 'OrbitalReinforced' as TypeEnum,
        OwnershipTransferred: 'OwnershipTransferred' as TypeEnum,
        ReimbursementMsg: 'ReimbursementMsg' as TypeEnum,
        ResearchMissionAvailableMsg: 'ResearchMissionAvailableMsg' as TypeEnum,
        RetractsWar: 'RetractsWar' as TypeEnum,
        SeasonalChallengeCompleted: 'SeasonalChallengeCompleted' as TypeEnum,
        SovAllClaimAquiredMsg: 'SovAllClaimAquiredMsg' as TypeEnum,
        SovAllClaimLostMsg: 'SovAllClaimLostMsg' as TypeEnum,
        SovCommandNodeEventStarted: 'SovCommandNodeEventStarted' as TypeEnum,
        SovCorpBillLateMsg: 'SovCorpBillLateMsg' as TypeEnum,
        SovCorpClaimFailMsg: 'SovCorpClaimFailMsg' as TypeEnum,
        SovDisruptorMsg: 'SovDisruptorMsg' as TypeEnum,
        SovStationEnteredFreeport: 'SovStationEnteredFreeport' as TypeEnum,
        SovStructureDestroyed: 'SovStructureDestroyed' as TypeEnum,
        SovStructureReinforced: 'SovStructureReinforced' as TypeEnum,
        SovStructureSelfDestructCancel: 'SovStructureSelfDestructCancel' as TypeEnum,
        SovStructureSelfDestructFinished: 'SovStructureSelfDestructFinished' as TypeEnum,
        SovStructureSelfDestructRequested: 'SovStructureSelfDestructRequested' as TypeEnum,
        SovereigntyIHDamageMsg: 'SovereigntyIHDamageMsg' as TypeEnum,
        SovereigntySBUDamageMsg: 'SovereigntySBUDamageMsg' as TypeEnum,
        SovereigntyTCUDamageMsg: 'SovereigntyTCUDamageMsg' as TypeEnum,
        StationAggressionMsg1: 'StationAggressionMsg1' as TypeEnum,
        StationAggressionMsg2: 'StationAggressionMsg2' as TypeEnum,
        StationConquerMsg: 'StationConquerMsg' as TypeEnum,
        StationServiceDisabled: 'StationServiceDisabled' as TypeEnum,
        StationServiceEnabled: 'StationServiceEnabled' as TypeEnum,
        StationStateChangeMsg: 'StationStateChangeMsg' as TypeEnum,
        StoryLineMissionAvailableMsg: 'StoryLineMissionAvailableMsg' as TypeEnum,
        StructureAnchoring: 'StructureAnchoring' as TypeEnum,
        StructureCourierContractChanged: 'StructureCourierContractChanged' as TypeEnum,
        StructureDestroyed: 'StructureDestroyed' as TypeEnum,
        StructureFuelAlert: 'StructureFuelAlert' as TypeEnum,
        StructureItemsDelivered: 'StructureItemsDelivered' as TypeEnum,
        StructureLostArmor: 'StructureLostArmor' as TypeEnum,
        StructureLostShields: 'StructureLostShields' as TypeEnum,
        StructureOnline: 'StructureOnline' as TypeEnum,
        StructureServicesOffline: 'StructureServicesOffline' as TypeEnum,
        StructureUnanchoring: 'StructureUnanchoring' as TypeEnum,
        StructureUnderAttack: 'StructureUnderAttack' as TypeEnum,
        TowerAlertMsg: 'TowerAlertMsg' as TypeEnum,
        TowerResourceAlertMsg: 'TowerResourceAlertMsg' as TypeEnum,
        TransactionReversalMsg: 'TransactionReversalMsg' as TypeEnum,
        TutorialMsg: 'TutorialMsg' as TypeEnum,
        WarAllyOfferDeclinedMsg: 'WarAllyOfferDeclinedMsg' as TypeEnum,
        WarSurrenderDeclinedMsg: 'WarSurrenderDeclinedMsg' as TypeEnum,
        WarSurrenderOfferMsg: 'WarSurrenderOfferMsg' as TypeEnum,
        NotificationTypeMoonminingExtractionStarted: 'notificationTypeMoonminingExtractionStarted' as TypeEnum
    }
}
