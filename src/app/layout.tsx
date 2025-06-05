import { Inter, Poppins } from 'next/font/google'
import '../styles/globals.css'
import { metadata } from './metadata'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black`}>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className='wrapper w-full  max-w-2xl overflow-hidden rounded-xl border border-red-500/30 h-screen overflow-y-scroll'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 