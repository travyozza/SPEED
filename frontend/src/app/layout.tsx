import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'
import styles from './styles/homepage.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SPEED',
  description: 'SPEED app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div>
      <header className={styles.title}>
        <h1>SPEED</h1>
      </header>
      <Navbar />
      {children}
    </div>
    </html>
  )
}

