import { InvestmentProjection } from '@/types/finance';

export const calculateProjectedReturns = (
    initialAmount: number,
    monthlyContribution: number,
    rate: number,
    years: number
): InvestmentProjection[] => {
    let currentTotal = initialAmount;
    let totalInvested = initialAmount;
    const projections: InvestmentProjection[] = [];

    // Monthly rate
    const monthlyRate = rate / 12;
    // const totalMonths = years * 12; // Unused variable fixed

    // Initial Year 0
    projections.push({
        year: 0,
        totalValue: Number(currentTotal.toFixed(2)),
        totalInvested: Number(totalInvested.toFixed(2)),
        totalInterest: 0,
    });

    if (years === 0) return projections;

    const totalMonths = years * 12;

    for (let month = 1; month <= totalMonths; month++) {
        // Interest is applied to the balance before contribution? Or after?
        // Standard: (Balance + Contribution) * (1 + rate) or Balance*(1+rate) + Contribution
        // Assuming contribution happens at start of month and earns interest:
        currentTotal = (currentTotal + monthlyContribution) * (1 + monthlyRate);
        totalInvested += monthlyContribution;

        // Record at end of each year
        if (month % 12 === 0) {
            projections.push({
                year: month / 12,
                totalValue: Number(currentTotal.toFixed(2)),
                totalInvested: Number(totalInvested.toFixed(2)),
                totalInterest: Number((currentTotal - totalInvested).toFixed(2)),
            });
        }
    }

    return projections;
};
