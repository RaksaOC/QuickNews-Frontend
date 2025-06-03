import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { metadata } from './metadata'
import { VideoContainer } from '@/components/ui2/VideoContainer'
import NavBar from '@/components/ui2/NavBar'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className='wrapper w-full  max-w-2xl overflow-hidden rounded-xl border border-red-500 h-screen'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 