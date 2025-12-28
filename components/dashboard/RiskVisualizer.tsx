"use client";

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RiskLevel } from "@/types/finance";

interface RiskVisualizerProps {
    riskLevel: RiskLevel;
    volatility: number;
}

const RISK_CONFIG: Record<RiskLevel, { color: string; description: string }> = {
    Low: {
        color: "bg-emerald-500",
        description: "Capital preservation is priority. Minimum fluctuation."
    },
    Medium: {
        color: "bg-blue-500",
        description: "Balanced growth and safety."
    },
    High: {
        color: "bg-orange-500",
        description: "Aggressive growth. Significant fluctuation expected."
    },
    Extreme: {
        color: "bg-red-600",
        description: "Maximum growth potential with risk of substantial loss."
    },
};

export function RiskVisualizer({ riskLevel, volatility }: RiskVisualizerProps) {
    // Normalize volatility (approximate scale for visual)
    const percentage = Math.min(Math.max(volatility * 100, 5), 100);
    const config = RISK_CONFIG[riskLevel];

    return (
        <div className="space-y-4 p-5 border rounded-xl bg-card text-card-foreground shadow-sm h-full">
            <div className="flex justify-between items-start">
                <div className="space-y-1">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                        Risk Profile
                    </h3>
                    <p className="text-xs text-muted-foreground">{config.description}</p>
                </div>
                <Badge variant="secondary" className={`${config.color} text-white border-0 px-3 py-1`}>
                    {riskLevel}
                </Badge>
            </div>

            <div className="space-y-3 pt-2">
                <div className="flex justify-between text-sm items-end">
                    <span className="text-muted-foreground">Expected Volatility</span>
                    <span className="font-mono font-medium">{(volatility * 100).toFixed(1)}%</span>
                </div>
                {/* Custom color override for Shadcn Progress */}
                <div className="relative">
                    <Progress
                        value={percentage}
                        className="h-2"
                    // Using style to override css variable or class for indicator if needed, 
                    // but tailwind arbitrary utility on child is cleaner if we can reference it
                    // Shadcn Progress structure: Root > Indicator
                    />
                    {/* We can use a colored div overlay or just assume standard color for now,
                 or apply utility classes to the Progress component to style the indicator. 
                 Shadcn's Progress usually accepts className. 
                 To style the indicator specifically, we might need a custom component or global css.
                 For now, I'll stick to 'primary' color or try to force color.
             */}
                </div>

                <div className="flex justify-between text-[10px] text-muted-foreground uppercase opacity-50">
                    <span>Stable</span>
                    <span>Volatile</span>
                </div>
            </div>
        </div>
    );
}
