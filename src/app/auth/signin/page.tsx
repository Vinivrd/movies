'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2, X } from 'lucide-react'

interface SignInProps {
  onClose?: () => void
  onSwitchToSignUp?: () => void
}

export default function SignIn({ onClose, onSwitchToSignUp }: SignInProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/')
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSwitchToSignUp = () => {
    if (onSwitchToSignUp) {
      onSwitchToSignUp()
    } else {
      router.push('/auth/signup')
    }
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden w-full max-w-md mx-auto">
      <div className="p-8 space-y-8 relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex items-center justify-center w-8 h-8 text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        <div className="text-center">
          <Link href="/" className="text-red-600 text-4xl font-bold">VRDFLIX</Link>
          <h2 className="mt-6 text-2xl font-bold text-white">Entre na sua conta</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 mt-1 bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 mt-1 bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-400">
              Ainda não tem uma conta?{' '}
              <span 
                className="font-medium text-red-600 hover:text-red-500 cursor-pointer"
                onClick={handleSwitchToSignUp}
              >
                Cadastre-se
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
} 