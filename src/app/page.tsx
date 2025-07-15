'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        Bonjour, je suis <span className="text-orange-600">Océane</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        Développeuse web fullstack passionnée par l’IA, le mobile et le DevOps.  
        Je conçois des applications modernes, accessibles et performantes.
      </p>
      <Link
        href="/projects"
        className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
      >
        Voir mes projets
      </Link>
    </main>
  )
}
