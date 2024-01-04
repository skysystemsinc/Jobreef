import { differenceInYears, differenceInMonths, differenceInWeeks, differenceInDays } from 'date-fns';

const totalExperience = {
    needs: { workExperience: true },
    compute(candidate) {
        let years = 0;
        let months = 0;
        let weeks = 0;
        let days = 0;
        candidate.workExperience?.forEach(workExp => {
            const start = workExp.startDate;
            const end = workExp.endDate || new Date();

            years += differenceInYears(end, start);
            months += differenceInMonths(end, start);
            weeks += differenceInWeeks(end, start);
            days += differenceInDays(end, start);
        });
        return { years, months, weeks, days, };
    },
};

/**
 * Custom fields for each model
 * @type {Object}
 * @property {Model Name} : {needs: Object, compute: (model) => any)}
 * @example
 * user: {
 *  fullName: {
 *      needs: { firstName: true, lastName: true },
 *      compute(user) {
 *          return `${user.firstName} ${user.lastName}`;
 *     },
 *   };
 * }
 */

const customFields = {
    candidate: {
        totalExperience: totalExperience,
    }
}

export default customFields;