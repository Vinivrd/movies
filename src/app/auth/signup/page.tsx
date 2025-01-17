'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Loader2, X } from 'lucide-react'

interface SignUpProps {
  onClose?: () => void
  onSwitchToSignIn?: () => void
}

export default function SignUp({ onClose, onSwitchToSignIn }: SignUpProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/auth/signin')
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }
  const handleSwitchToSignIn = () => {
    if (onSwitchToSignIn) {
      onSwitchToSignIn()
    } else {
      router.push('/auth/signin')
    }
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow-xl flex overflow-hidden w-[90%] md:w-[1000px] mx-auto">
      {/* Imagem à esquerda - escondida em mobile */}
      <div className="relative hidden md:block w-1/2 bg-black">
        <Image
          src="/eldenRIng.jpg"
          alt="VrdFlix Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
      </div>

      {/* Formulário - ocupa toda largura em mobile */}
      <div className="w-full md:w-1/2 p-8 space-y-8 relative">
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
          <span className="text-red-600 text-4xl font-bold">VRDFLIX</span>
          <h2 className="mt-6 text-2xl font-bold text-white">Criar uma conta</h2>
          <p className="mt-2 text-sm text-gray-400">
            Comece sua jornada de streaming hoje
          </p>
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
              <p className="mt-1 text-xs text-gray-400">
                Mínimo de 8 caracteres
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-300">
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
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
                  Criando conta...
                </>
              ) : (
                'Inscreva-se Gratuitamente'
              )}
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-400">
              Já tem uma conta?{' '}
              <span className="font-medium text-red-600 hover:text-red-500 cursor-pointer"
              onClick={handleSwitchToSignIn}>
                Faça login
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
} 