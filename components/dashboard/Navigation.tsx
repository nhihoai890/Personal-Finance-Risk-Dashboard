"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    PiggyBank,
    Landmark,
    TrendingUp,
    Bitcoin
} from "lucide-react";

const navItems = [
    { name: "Savings", href: "/savings", icon: PiggyBank },
    { name: "Bonds", href: "/bonds", icon: Landmark },
    { name: "Index Funds", href: "/index-funds", icon: TrendingUp },
    { name: "Crypto", href: "/crypto", icon: Bitcoin },
];

export function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="space-y-1">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                            isActive
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                    >
                        <Icon className="h-5 w-5" />
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
}
