"use client";

import { useState } from "react";
import { ASSET_CLASSES } from "@/lib/risk-data";
import { calculateProjectedReturns } from "@/lib/financial-utils";
import { TimeHorizonSlider } from "@/components/dashboard/TimeHorizonSlider";
import { RiskVisualizer } from "@/components/dashboard/RiskVisualizer";
import { ProjectedReturns } from "@/components/dashboard/ProjectedReturns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BondsPage() {
    const asset = ASSET_CLASSES.bonds;
    const [timeHorizon, setTimeHorizon] = useState(8);
    const [initialAmount, setInitialAmount] = useState(10000);
    const [monthlyContribution, setMonthlyContribution] = useState(500);

    const projections = calculateProjectedReturns(
        initialAmount,
        monthlyContribution,
        asset.expectedReturnRate,
        timeHorizon
    );

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">{asset.name}</h2>
                <p className="text-muted-foreground">{asset.description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Configuration</CardTitle>
                            <CardDescription>Adjust your investment parameters.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <TimeHorizonSlider
                                value={timeHorizon}
                                onValueChange={setTimeHorizon}
                                min={Math.max(1, asset.minTimeHorizon)}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Initial Amount ($)</Label>
                                    <Input
                                        type="number"
                                        value={initialAmount}
                                        onChange={(e) => setInitialAmount(Number(e.target.value))}
                                        min={0}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Monthly Contribution ($)</Label>
                                    <Input
                                        type="number"
                                        value={monthlyContribution}
                                        onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                                        min={0}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="h-[400px]">
                        <ProjectedReturns data={projections} years={timeHorizon} />
                    </div>
                </div>

                <div className="col-span-3 space-y-6">
                    <RiskVisualizer riskLevel={asset.riskLevel} volatility={asset.volatility} />

                    <Card>
                        <CardHeader>
                            <CardTitle>About this Asset</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm space-y-3">
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-muted-foreground">Expected Annual Return</span>
                                    <span className="font-medium">{(asset.expectedReturnRate * 100).toFixed(2)}%</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-muted-foreground">Min Recommended Horizon</span>
                                    <span className="font-medium">{asset.minTimeHorizon} Years</span>
                                </div>
                                <p className="text-muted-foreground pt-2 leading-relaxed">
                                    Bonds (Treasury or Corporate) are generally safer than stocks but carry interest rate risk.
                                    They are suitable for income generation and moderating portfolio volatility.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
