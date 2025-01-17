'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function SignOut() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        // Aqui você implementará a lógica de logout
        await new Promise(resolve => setTimeout(resolve, 1000))
        router.push('/auth/signin')
      } catch (error) {
        console.error('Erro ao fazer logout:', error)
      }
    }

    handleSignOut()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-90">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-900 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-bold text-white">Saindo...</h2>
        <div className="flex justify-center">
          <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
        </div>
        <p className="text-gray-400">Você será redirecionado em instantes.</p>
      </div>
    </div>
  )
} 