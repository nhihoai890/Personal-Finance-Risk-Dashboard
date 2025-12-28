import { calculateProjectedReturns } from '@/lib/financial-utils';

describe('calculateProjectedReturns', () => {
    it('should calculate returns correctly for 0% interest', () => {
        const result = calculateProjectedReturns(1000, 100, 0, 1);
        // 1000 + 100*12 = 2200
        const last = result[result.length - 1];
        expect(last.year).toBe(1);
        expect(last.totalInvested).toBe(2200);
        expect(last.totalValue).toBeCloseTo(2200);
    });

    it('should calculate returns with interest correctly', () => {
        // 100 initial, 0 monthly, 10% annual (0.10)
        const result = calculateProjectedReturns(100, 0, 0.10, 1);
        const last = result[result.length - 1];
        expect(last.totalValue).toBeGreaterThan(100);
    });

    it('should handle zero years returns initial state', () => {
        const result = calculateProjectedReturns(1000, 100, 0.05, 0);
        expect(result).toHaveLength(1);
        expect(result[0].totalValue).toBe(1000);
    });
});
