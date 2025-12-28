"use client";

import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface TimeHorizonSliderProps {
    value: number;
    onValueChange: (value: number) => void;
    min?: number;
    max?: number;
}

export function TimeHorizonSlider({
    value,
    onValueChange,
    min = 1,
    max = 30,
}: TimeHorizonSliderProps) {
    return (
        <div className="space-y-4 w-full">
            <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Time Horizon (Years)</Label>
                <span className="text-xl font-bold font-mono text-primary">
                    {value} Years
                </span>
            </div>
            <Slider
                value={[value]}
                onValueChange={(val) => onValueChange(val[0])}
                min={min}
                max={max}
                step={1}
                className="cursor-pointer py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-widest">
                <span>{min} Years</span>
                <span>{max} Years</span>
            </div>
        </div>
    );
}
