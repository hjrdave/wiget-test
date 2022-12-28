const originalObject = {
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
    travelCompanions: [],
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

export default originalObject;