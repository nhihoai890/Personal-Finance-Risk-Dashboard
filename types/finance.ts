export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Extreme';

export interface AssetClassData {
    id: string;
    name: string;
    description: string;
    riskLevel: RiskLevel;
    volatility: number; // 0-1 scale, or percent standard deviation
    expectedReturnRate: number; // Annual return rate (0.05 = 5%)
    minTimeHorizon: number; // Recommended minimum years
}

export interface InvestmentProjection {
    totalValue: number;
    totalInvested: number;
    totalInterest: number;
    year: number;
}
