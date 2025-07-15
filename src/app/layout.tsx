import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'
import { Fira_Sans } from 'next/font/google'

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-fira',
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio Océane',
  description: 'Développeuse fullstack & IA',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${firaSans.variable}`}>
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
        {/* HEADER */}
        <header className="w-full px-6 py-4 bg-white dark:bg-gray-800 shadow">
          <nav className="max-w-5xl mx-auto flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-100">
            <Link href="/" className="hover:text-orange-600 transition">Accueil</Link>
            <Link href="/about" className="hover:text-orange-600 transition">À propos</Link>
            <Link href="/projects" className="hover:text-orange-600 transition">Projets</Link>
            <Link href="/contact" className="hover:text-orange-600 transition">Contact</Link>
          </nav>
        </header>

        {/* CONTENU */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <footer className="w-full px-6 py-6 bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-400 mt-12">
          Développé par Océane — © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  )
}
