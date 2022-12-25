const foo = [
    "TripCancellation", "TripInterruption", "TripDelayAndMissedConnection", "TripDelay"
    , "TripCancellationForAnyReason", "EFEducationalTours", "SingleSupplement", "SingleSupplement", "GoAheadTours", "TripCancellationForAnyReason", "EventTicketRegistrationFeeProtection", "UltimateBreak", "TripInterruptionForAnyReason", "CollegeStudyTours", "PetKennel", "GapYear",
    "PrimaryInsuredName", "ExploreAmerica", "PrimaryInsuredDateOfBirth"
    , "PrimaryInsuredPolicyNumber", "PrimaryInsuredCertificateNumber"
    , "PrimaryInsuredName", "PrimaryInsuredPhoneNumber", "PrimaryInsuredEmailAddress"
    , "PrimaryInsuredDateOfBirth", "PrimaryInsuredName", "PrimaryInsuredEmailAddress", "PrimaryInsuredPhoneNumber"
    , "PrimaryInsuredCertificateNumber", "PrimaryInsuredDateOfBirth", "PrimaryInsuredFaxNumber", "PrimaryInsuredFaxNumber"
    , "PrimaryInsuredEmailAddress", "PrimaryInsuredCertificateNumber", "PrimaryInsuredMailingAddress"
    , "PrimaryInsuredPhoneNumber", "PrimaryInsuredEmailAddress", "PrimaryInsuredCityOne", "PrimaryInsuredFaxNumber", "PrimaryInsuredPhoneNumber", "PrimaryInsuredStateOne", "PrimaryInsuredMailingAddress", "PrimaryInsuredFaxNumber", "PrimaryInsuredZipCodeOne", "PrimaryInsuredCityOne", "PrimaryInsuredMailingAddress", "PrimaryInsuredHomeAddress", "PrimaryInsuredStateProvinceRegionOne", "PrimaryInsuredCityOne", "PrimaryInsuredCityTwo", "PrimaryInsuredPostalCodeOne", "PrimaryInsuredStateOne", "PrimaryInsuredStateTwo", "PrimaryInsuredHomeAddress", "PrimaryInsuredZipCodeOne", "PrimaryInsuredZipCodeTwo", "PrimaryInsuredCityTwo", "PrimaryInsuredHomeAddress", "PrimaryInsuredPreferredMethodOfContactMail"
    , "PrimaryInsuredStateProvinceRegionTwo", "PrimaryInsuredCityTwo", "PrimaryInsuredPreferredMethodOfContactEmail", "PrimaryInsuredPreferredMethodOfContactEmail"
    , "PrimaryInsuredPostalCodeTwo", "PrimaryInsuredStateTwo", "PrimaryInsuredPreferredMethodOfContactPhone", "PrimaryInsuredPreferredMethodOfContactPhone"
    , "PrimaryInsuredPreferredMethodOfContactMail", "PrimaryInsuredZipCodeTwo", "PrimaryInsuredPreferredMethodOfContactEmail", "PrimaryInsuredPreferredMethodOfContactMail", "PrimaryInsuredPreferredMethodOfContactPhone", "PrimaryInsuredPreferredMethodOfContactEmail", "ProviderCompanyName", "ScheduledDateOfDeparture"
    ,
    "PrimaryInsuredPreferredMethodOfContactPhone", "ProviderPhoneNumber", "ScheduledDateOfReturn"
    ,
    "ProviderAddress", "ActualDateOfDeparture"
    , "ConfirmationNumber", "ProviderCity", "ActualDateOfReturn"
    , "BookingNumber", "ProviderCompanyName", "ProviderState", "DateOfDeparture", "ProviderPhoneNumber", "ProviderZipCode", "DateOfReturn", "ProviderAddress", "DateTravelArrangementsMade", "AirfareAmount"
    , "OriginalDestination", "ProviderCity", "DateOfInitialPayment", "ChildcareAmount"
    , "TravelSupplier", "ProviderState", "ScheduledDateOfDeparture", "CruiseshipAmount"
    , "PaymentForLandSeaAirArrangements", "ProviderZipCode", "ScheduledDateOfReturn", "DepositAmount"
    ,
    "ScheduledDateOfDeparture", "ActualDateOfReturn", "EventTicketAmount"
    ,
    "ScheduledDateOfReturn", "HotelAmount"
    , "AirfareAmount", "ActualDateOfReturn", "LodgingAmount"
    , "ChildcareAmount", "AirfareAmount", "MedicalTreatmentAmount"
    , "CruiseshipAmount", "LodgingAmount", "PrescriptionsAmount"
    , "EventTicketAmount", "AirfareAmount", "TourAmount", "RentalCarAmount"
    , "LodgingAmount", "LodgingAmount", "CruiseshipAmount", "TourAmount"
    , "RentalCarAmount", "TourAmount", "OtherAmount", "OtherAmount"
    , "TourAmount", "CruiseshipAmount", "TotalExpensesAmount", "TotalExpensesAmount"
    , "OtherAmount", "OtherAmount", "RefundAmount", "RefundAmount"
    , "TotalExpensesAmount", "TotalExpensesAmount", "TotalClaimedAmount", "TotalClaimedAmount"
    , "RefundsAmount", "RefundAmount", "NotClaimingAirlineTickets", "NotClaimingAirlineTickets"
    , "TotalClaimedAmount", "TotalClaimedAmount", "WillBeClaimingAirlineTickets", "WillBeClaimingAirlineTickets"
    ,
    "NotClaimingAirlineTickets",
    "WillBeClaimingAirlineTickets", "DidReceiveCreditVoucherTrue", "CompanionNameOne", "CompanionNameOne"
    , "DidReceiveCreditVoucherFalse", "CompanionNameTwo", "CompanionNameTwo"
    , "WillUseCreditVoucherTrue", "CompanionNameOne", "CompanionNameThree", "CompanionNameThree"
    , "WillUseCreditVoucherFalse", "CompanionNameTwo", "CompanionNameFour", "CompanionNameFour"
    , "CreditVoucherIssuerNameOne", "CompanionNameThree", "TravelCompanionPolicyNumberOne", "TravelingCompanionCertificateNumberOne"
    , "CreditVoucherIssuerNameTwo", "CompanionNameFour", "TravelCompanionPolicyNumberTwo", "TravelingCompanionCertificateNumberTwo"
    , "CreditVoucherIssuerNameThree", "TravelCompanionRelationshipOne", "TravelCompanionPolicyNumberThree", "TravelingCompanionCertificateNumberThree"
    , "CreditOrVoucherNumberOne", "TravelCompanionRelationshipTwo", "TravelCompanionPolicyNumberFour", "TravelingCompanionCertificateNumberFour"
    , "CreditOrVoucherNumberTwo", "TravelCompanionRelationshipThree", "ReasonForCancellationDelayInterruption", "ReasonForCancellationDelayInterruption"
    , "CreditOrVoucherNumberThree", "TravelCompanionRelationshipFour",
    "ReasonForCancellationDelayInterruption",
    "InsuredName", "InsuredName"
    , "CreditOrVoucherNumberOne", "InsuredDateOfBirth", "InsuredDateOfBirth"
    , "CreditOrVoucherNumberTwo", "InsuredName", "InsuredRelationshipToPrimary", "InsuredRelationshipToPrimary"
    , "CreditOrVoucherNumberThree", "InsuredDateOfBirth", "YesReceivedMedicalAttention", "LastTreatmentDate"
    , "CreditOrVoucherNumberFour", "InsuredRelationshipToPrimary", "NoReceivedMedicalAttention", "PeriodOfHospitalizationFrom"
    , "CreditOrVoucherNumberFive", "YesReceivedMedicalAttention", "DateLastTreated", "PeriodOfHospitalizationTo"
    , "CreditOrVoucherNumberSix", "NoReceivedMedicalAttention", "PeriodOfHospitalizationFrom", "CreditOrVoucherNumberSeven", "DateLastTreated", "PeriodOfHospitalizationTo", "CreditOrVoucherNumberEight", "PeriodOfHospitalizationFrom", "InsuredSignatureDate"
    , "CreditOrVoucherNumberNine", "PeriodOfHospitalizationTo", "InsuredSignature"
    , "CreditOrVoucherNumberTen", "InsuredSignatureDate", "TravelCompanionCertificateOne", "InsuredSignature", "TravelCompanionCertificateTwo", "InsuredSignatureDate", "OtherInsuranceName"
    , "TravelCompanionCertificateThree", "InsuredSignature", "OtherInsurancePlanNumber"
    , "TravelCompanionCertificateFour", "HasOtherInsuranceTrue", "OtherInsuranceTelephone"
    , "TravelCompanionCertificateFive", "HasOtherInsuranceFalse", "TravelCompanionCertificateSix", "HasOtherInsuranceTrue", "OtherInsuranceName", "InsuredSignature"
    , "TravelCompanionCertificateSeven", "HasOtherInsuranceFalse", "OtherInsurancePlanNumber", "InsuredSignatureDate"
    , "TravelCompanionCertificateEight", "OtherInsuranceName", "OtherInsuranceCreditCardBank", "TravelCompanionCertificateNine", "OtherInsurancePlanNumber", "TravelCompanionCertificateTen", "OtherInsuranceCreditCardBank", "InsuredSignature", "IsClaimingOnBehalfOfTravelCompanionOneTrue", "InsuredSignatureDate", "IsClaimingOnBehalfOfTravelCompanionOneFalse", "InsuredSignature", "IsClaimingOnBehalfOfTravelCompanionTwoTrue", "InsuredSignatureDate", "IsClaimingOnBehalfOfTravelCompanionTwoFalse", "IsClaimingOnBehalfOfTravelCompanionThreeTrue", "IsClaimingOnBehalfOfTravelCompanionThreeFalse", "IsClaimingOnBehalfOfTravelCompanionFourTrue", "IsClaimingOnBehalfOfTravelCompanionFourFalse", "IsClaimingOnBehalfOfTravelCompanionFiveTrue", "IsClaimingOnBehalfOfTravelCompanionFiveFalse", "IsClaimingOnBehalfOfTravelCompanionSixTrue", "IsClaimingOnBehalfOfTravelCompanionSixFalse", "IsClaimingOnBehalfOfTravelCompanionSevenTrue", "IsClaimingOnBehalfOfTravelCompanionSevenFalse", "IsClaimingOnBehalfOfTravelCompanionEightTrue", "IsClaimingOnBehalfOfTravelCompanionEightFalse", "IsClaimingOnBehalfOfTravelCompanionNineTrue", "IsClaimingOnBehalfOfTravelCompanionNineFalse", "IsClaimingOnBehalfOfTravelCompanionTenTrue", "IsClaimingOnBehalfOfTravelCompanionTenFalse", "ReasonForCancellationDelayInterruption", "InsuredName", "InsuredDateOfBirth", "RelationshipToPrimaryInsured", "SameAsPrimaryInsured", "LastTreatmentDate", "HospitalizationStartDate", "HospitalizationEndDate", "InsuredSignatureDate", "InsuredSignature", "HasOtherInsuranceTrue", "HasOtherInsuranceFalse", "OtherInsuranceName", "OtherInsuranceAddress", "OtherInsuranceCity", "OtherInsuranceState/Province/Region", "OtherInsurancePostalCode", "OtherInsurancePolicyNumber", "OtherInsurancePhoneNumber",
    "InsuredSignature", "InsuredName", "InsuredSignatureDate",
]

export default foo;


