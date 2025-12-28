import { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface DashboardShellProps {
    children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
    return (
        <div className="flex min-h-screen bg-background text-foreground font-sans antialiased">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r bg-card hidden md:flex flex-col">
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-8 px-2">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">R</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight">RiskDash</h1>
                    </div>
                    <Navigation />
                </div>
                <div className="mt-auto p-6 border-t">
                    <div className="text-xs text-muted-foreground">
                        <p>Personal Finance Dashboard</p>
                        <p>v0.1.0 Beta</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 min-h-screen relative">
                <div className="h-full p-8 container max-w-screen-2xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
