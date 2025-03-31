"use client"
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Mixpanel } from "@/lib/mixpanel";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    useEffect(() => {
        if (pathname) {
            Mixpanel.track("Page View", { page: pathname })
        }
    }, [pathname])
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
