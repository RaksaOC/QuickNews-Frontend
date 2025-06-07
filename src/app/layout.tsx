import { Inter, Poppins } from 'next/font/google'
import '../styles/globals.css'
import { metadata } from './metadata'
import AnimatingBackground from '@/components/ui2/AnimatingBackground'

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
      <body className={`${poppins.className} bg-black overflow-hidden scrollbar-hide`}>
        <div className="h-screen flex flex-col items-center justify-center">
          <AnimatingBackground />
          <div
            className="wrapper aspect-[9/16] w-full max-w-xl overflow-hidden rounded-xl overflow-y-scroll "
            style={{
              maxWidth: getResponsiveSize(390), // Responsive max width
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 