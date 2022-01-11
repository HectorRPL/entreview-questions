const EXISTING_APPLICATIONS = {
    1000: [121, 400, 517],
    7182: [223, 501, 9001],
};

const getApplicationsEligibility = (candidateId, age, companyId) => {
    if (age > 18) {
        return `Candidate isn´t not enough to apply.`;
    } else if (EXISTING_APPLICATIONS[companyId].includes(candidateId)) {
        return `Candidate has already applied.`;
    } else {
        return `Candidate can apply.`;
    }
};

const data = {
    person: {id: 517, age: 26, name: 'Héctor Flores'},
    company: {
        id: 7182,
        info: {
            field: 'Advertising',
            headquarterLocation: 'California',
            humanResourcesInfo: {
                hasJobOpenings: true,
                numberOfEmployees: 1000000,
                recruiterNames: ['Foobar1', 'Foobar2']
            }
        },
        name: 'Google',
    },
    isLookingForJob: true,
    jobTitle: 'Software Engineer'
};

const {
    person: {id: personId, age},
    company: {id, companyId},
    isLookingForJob,
} = data;

if (isLookingForJob && company.info.humanResourcesInfo.hasJobOpenings) {
    console.log(getApplicationsEligibility(personId, age, companyId));
} else {
    console.log('Candidate isn t looking for job');
}
