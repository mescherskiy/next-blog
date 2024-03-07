import Navbar from './components/Navbar'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Alex's blog",
  description: 'Created by Oleksandr Meshcherskyi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar />
        <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
