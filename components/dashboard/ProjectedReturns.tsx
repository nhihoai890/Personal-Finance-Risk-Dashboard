"use client";

import { InvestmentProjection } from "@/types/finance";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ProjectedReturnsProps {
    data: InvestmentProjection[];
    years: number;
}

export function ProjectedReturns({ data, years }: ProjectedReturnsProps) {
    const finalProjection = data[data.length - 1] || { totalValue: 0, totalInvested: 0, totalInterest: 0 };

    const formatCurrency = (value: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Projected Returns ({years} Years)</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-secondary/50">
                        <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                        <p className="text-2xl font-bold text-primary">{formatCurrency(finalProjection.totalValue)}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/20">
                        <p className="text-sm font-medium text-muted-foreground">Total Invested</p>
                        <p className="text-lg font-semibold">{formatCurrency(finalProjection.totalInvested)}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/20">
                        <p className="text-sm font-medium text-muted-foreground">Total Interest</p>
                        <p className="text-lg font-semibold text-green-500">+{formatCurrency(finalProjection.totalInterest)}</p>
                    </div>
                </div>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                            <XAxis dataKey="year" tickFormatter={(val) => `Y${val}`} />
                            <YAxis
                                tickFormatter={(val) => `$${val / 1000}k`}
                                width={60}
                            />
                            <Tooltip
                                formatter={(value: number) => formatCurrency(value)}
                                labelFormatter={(label) => `Year ${label}`}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="totalValue"
                                stroke="#8884d8"
                                fillOpacity={1}
                                fill="url(#colorValue)"
                                name="Total Value"
                            />
                            <Area
                                type="monotone"
                                dataKey="totalInvested"
                                stroke="#82ca9d"
                                fillOpacity={0.3}
                                fill="#82ca9d"
                                name="Principal"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
