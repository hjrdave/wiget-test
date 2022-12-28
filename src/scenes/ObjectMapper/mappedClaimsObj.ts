export const claimsObj = {
    certificateId: "",
    claimTemplateId: "",
    claimReason: "",
    primaryInsured: {
        name: "",
        dateOfBirth: "",
        certificateNumber: "",
        emailAddress: "",
        phone: "",
        fax: "",
        mailingAddress: "",
        mailingCity: "",
        mailingState: "",
        mailingPostalCode: "",
        homeAddress: "",
        homeCity: "",
        homeState: "",
        homePostalCode: "",
        preferredContactMethod: "",
    },
    travelInformation: {
        confirmationNumber: "",
        bookingNumber: "",
        dateOfDeparture: "",
        dateOfReturn: "",
        originalDestination: "",
        travelSupplier: "",
        dateOfFirstPayment: "",
    },
    claimedExpenses: {
        airfare: "",
        childcare: "",
        cruise: "",
        deposit: "",
        eventTicket: "",
        hotel: "",
        lodging: "",
        rentalCar: "",
        tour: "",
        other: "",
        totalExpenses: "",
        refunds: "",
        totalClaimed: "",
    },
    travelVouchers: {
        hasVouchers: "",
        useVouchers: "",
        voucherEntity1: "",
        voucherNumber1: "",
        voucherEntity2: "",
        voucherNumber2: "",
        voucherEntity3: "",
        voucherNumber3: "",
    },
    travelCompanions: [
        { name: 'Foo Bar', certificate: '23535235235', claimOnBehalf: 'yes' },
        { name: 'Fee Bear', certificate: '235231243124', claimOnBehalf: 'yes' }
    ],
    reasonForCancellation: "",
    medicalCancellation: {
        name: "",
        dateOfBirth: "",
        relationshipToPrimary: "",
        isPrimary: "",
        dateOfLastTreatment: "",
        hospitalizationPeriod: {
            startDate: "",
            endDate: "",
        },
    },
    otherInsurance: {
        otherInsurance: "",
        name: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        policyNumber: "",
        phone: "",
    }
};


const mappedObj = {
    ConfirmationNumber: claimsObj.travelInformation.confirmationNumber,
    ['missing1']: claimsObj.certificateId,//did not find a corresponding property
    ['missing2']: claimsObj.claimTemplateId,//did not find a corresponding property
    CompanionNameOne: claimsObj.travelCompanions[0].name,
    CompanionNameTwo: claimsObj.travelCompanions[1].name,
    CompanionNameThree: claimsObj.travelCompanions[2].name,
    CompanionNameFour: claimsObj.travelCompanions[3].name,
    IsClaimingOnBehalfOfTravelCompanionOneTrue: (claimsObj.travelCompanions[0].claimOnBehalf) ? true : false,
    IsClaimingOnBehalfOfTravelCompanionOneFalse: (!claimsObj.travelCompanions[0].claimOnBehalf) ? true : false,
    IsClaimingOnBehalfOfTravelCompanionTwoTrue: (claimsObj.travelCompanions[1].claimOnBehalf) ? true : false,
    IsClaimingOnBehalfOfTravelCompanionTwoFalse: (!claimsObj.travelCompanions[1].claimOnBehalf) ? true : false,
    IsClaimingOnBehalfOfTravelCompanionThreeTrue: (claimsObj.travelCompanions[2].claimOnBehalf) ? true : false,
    IsClaimingOnBehalfOfTravelCompanionThreeFalse: (!claimsObj.travelCompanions[2].claimOnBehalf) ? true : false,
    IsClaimingOnBehalfOfTravelCompanionFourTrue: (claimsObj.travelCompanions[3].claimOnBehalf) ? true : false,
    IsClaimingOnBehalfOfTravelCompanionFourFalse: (!claimsObj.travelCompanions[3].claimOnBehalf) ? true : false,
    TravelCompanionPolicyNumberOne: claimsObj.travelCompanions[0].certificate,
    TravelCompanionPolicyNumberTwo: claimsObj.travelCompanions[1].certificate,
    TravelCompanionPolicyNumberThree: claimsObj.travelCompanions[2].certificate,
    TravelCompanionPolicyNumberFour: claimsObj.travelCompanions[3].certificate,
    PrimaryInsuredName: claimsObj.primaryInsured.name,
    PrimaryInsuredDateOfBirth: claimsObj.primaryInsured.dateOfBirth,
    PrimaryInsuredCertificateNumber: claimsObj.primaryInsured.certificateNumber,
    PrimaryInsuredEmailAddress: claimsObj.primaryInsured.emailAddress,
    PrimaryInsuredPhoneNumber: claimsObj.primaryInsured.phone,
    PrimaryInsuredFaxNumber: claimsObj.primaryInsured.fax,
    PrimaryInsuredMailingAddress: claimsObj.primaryInsured.mailingAddress,
    PrimaryInsuredCityOne: claimsObj.primaryInsured.homeCity,//unsure
    PrimaryInsuredStateOne: claimsObj.primaryInsured.homeState,//unsure
    PrimaryInsuredZipCodeOne: claimsObj.primaryInsured.homePostalCode,//unsure
    PrimaryInsuredHomeAddress: claimsObj.primaryInsured.homeAddress,
    PrimaryInsuredCityTwo: claimsObj.primaryInsured.mailingCity,//unsure
    PrimaryInsuredStateProvinceRegionOne: claimsObj.primaryInsured.mailingState,//unsure
    PrimaryInsuredPostalCodeOne: claimsObj.primaryInsured.mailingPostalCode,//unsure

    //Boolean props (These props accept a boolean, my guess... 
    //Created logic to determine boolean based on string. I would double check my string values
    PrimaryInsuredPreferredMethodOfContactMail: (claimsObj.primaryInsured.preferredContactMethod === 'postal') ? true : false,
    PrimaryInsuredPreferredMethodOfContactEmail: (claimsObj.primaryInsured.preferredContactMethod === 'email') ? true : false,
    PrimaryInsuredPreferredMethodOfContactPhone: (claimsObj.primaryInsured.preferredContactMethod === 'phone') ? true : false,
    //END Boolean Props

    ScheduledDateOfDeparture: claimsObj.travelInformation.dateOfDeparture,
    ScheduledDateOfReturn: claimsObj.travelInformation.dateOfReturn,
    OriginalDestination: claimsObj.travelInformation.originalDestination,
    TravelSupplier: claimsObj.travelInformation.travelSupplier,
    DateOfInitialPayment: claimsObj.travelInformation.dateOfFirstPayment,
    AirfareAmount: claimsObj.claimedExpenses.airfare,
    ChildcareAmount: claimsObj.claimedExpenses.childcare,
    BookingNumber: claimsObj.travelInformation.bookingNumber,
    ReasonForCancellationDelayInterruption: claimsObj.claimReason,
    CruiseshipAmount: claimsObj.claimedExpenses.cruise,
    DepositAmount: claimsObj.claimedExpenses.deposit,
    EventTicketAmount: claimsObj.claimedExpenses.eventTicket,
    HotelAmount: claimsObj.claimedExpenses.hotel,
    LodgingAmount: claimsObj.claimedExpenses.lodging,
    RentalCarAmount: claimsObj.claimedExpenses.rentalCar,
    TourAmount: claimsObj.claimedExpenses.tour,
    OtherAmount: claimsObj.claimedExpenses.other,
    TotalExpensesAmount: claimsObj.claimedExpenses.totalExpenses,
    RefundsAmount: claimsObj.claimedExpenses.refunds,
    TotalClaimedAmount: claimsObj.claimedExpenses.totalClaimed,

    //boolean properties (did a ternary operator for that)
    DidReceiveCreditVoucherTrue: (claimsObj.travelVouchers.hasVouchers) ? true : false,
    DidReceiveCreditVoucherFalse: (!claimsObj.travelVouchers.hasVouchers) ? true : false,
    WillUseCreditVoucherTrue: claimsObj.travelVouchers.useVouchers,
    WillUseCreditVoucherFalse: claimsObj.travelVouchers.useVouchers,
    //END boolean properties

    CreditOrVoucherNumberOne: claimsObj.travelVouchers.voucherNumber1,
    CreditVoucherIssuerNameOne: claimsObj.travelVouchers.voucherEntity1,
    CreditOrVoucherNumberTwo: claimsObj.travelVouchers.voucherNumber2,
    CreditVoucherIssuerNameTwo: claimsObj.travelVouchers.voucherEntity2,
    CreditOrVoucherNumberThree: claimsObj.travelVouchers.voucherNumber3,
    CreditVoucherIssuerNameThree: claimsObj.travelVouchers.voucherEntity3,
    InsuredName: claimsObj.medicalCancellation.name,
    InsuredDateOfBirth: claimsObj.medicalCancellation.dateOfBirth,
    TripCancellationForAnyReason: claimsObj.reasonForCancellation,
    InsuredRelationshipToPrimary: claimsObj.medicalCancellation.relationshipToPrimary,
    DateLastTreated: claimsObj.medicalCancellation.dateOfLastTreatment,
    HospitalizationStartDate: claimsObj.medicalCancellation.hospitalizationPeriod.startDate,
    HospitalizationEndDate: claimsObj.medicalCancellation.hospitalizationPeriod.endDate,
    OtherInsuranceName: claimsObj.otherInsurance.name,
    OtherInsuranceAddress: claimsObj.otherInsurance.address,
    OtherInsuranceCity: claimsObj.otherInsurance.city,
    OtherInsuranceStateProvinceRegion: claimsObj.otherInsurance.state,  //This property was invalid in the spreadsheet. orgName = OtherInsuranceState/Province/Region, myUpdatedName = OtherInsuranceStateProvinceRegion
    OtherInsurancePostalCode: claimsObj.otherInsurance.postalCode,
    OtherInsurancePolicyNumber: claimsObj.otherInsurance.policyNumber,
    OtherInsuranceTelephone: claimsObj.otherInsurance.phone,
    PrimaryInsuredPolicyNumber: claimsObj.medicalCancellation.isPrimary,//unsure
    OtherInsurancePlanNumber: claimsObj.otherInsurance.otherInsurance //unsure
}