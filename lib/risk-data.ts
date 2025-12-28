import { AssetClassData } from '@/types/finance';

export const ASSET_CLASSES: Record<string, AssetClassData> = {
    savings: {
        id: 'savings',
        name: 'High-Yield Savings',
        description: 'Safe and steady growth with FDIC insurance.',
        riskLevel: 'Low',
        volatility: 0.01,
        expectedReturnRate: 0.045, // 4.5% APY
        minTimeHorizon: 0,
    },
    bonds: {
        id: 'bonds',
        name: 'Government Bonds',
        description: 'Lower risk securities backing government projects.',
        riskLevel: 'Medium',
        volatility: 0.05,
        expectedReturnRate: 0.055, // 5.5%
        minTimeHorizon: 3,
    },
    indexFunds: {
        id: 'index-funds',
        name: 'S&P 500 Index Funds',
        description: 'Diversified exposure to the wildest market.',
        riskLevel: 'High',
        volatility: 0.15,
        expectedReturnRate: 0.10, // 10% historical average
        minTimeHorizon: 7,
    },
    crypto: {
        id: 'crypto',
        name: 'Cryptocurrency',
        description: 'High volatility digital assets with high growth potential.',
        riskLevel: 'Extreme',
        volatility: 0.80,
        expectedReturnRate: 0.15, // Speculative
        minTimeHorizon: 5,
    }
};
