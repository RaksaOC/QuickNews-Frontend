import { Inter, Poppins } from 'next/font/google'
import '../styles/globals.css'
import { metadata } from './metadata'
import AnimatingBackground from '@/components/ui/AnimatingBackground'
import SideBar from '@/components/layout/SideBar'
import { AIButton } from '@/components/ui-web/AIButton'
import { Profile } from '@/components/ui-web/Profile'
import ScrollButton from '@/components/ui-web/ScrollButton'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export { metadata }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    // Calculate responsive sizes based on viewport height (700px reference)
    const getResponsiveSize = (baseSize: number): string => {
        // Convert base size to vh units (700px = 100vh reference)
        const vhSize = (baseSize / 700) * 100;
        // Only use vh units for responsive scaling, with a minimum size to prevent text from becoming too small
        return `max(${baseSize * 0.5}px, ${vhSize}vh)`;
    };

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/logo2.png" />
            </head>
            <body className={`${poppins.className} bg-gray-950 overflow-hidden scrollbar-hide max-h-screen h-screen relative flex  justify-between items-center p-4 gap-2`}>
                <SideBar />
                <div
                    className="content-wrapper w-full h-full  overflow-hidden rounded-xl"
                >
                    {children}
                </div>
                {/* <AIButton /> */}
                <Profile />
                <ScrollButton />
            </body>
        </html>
    )
} 