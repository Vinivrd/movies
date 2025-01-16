'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function SignIn() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Aqui você implementará a lógica de autenticação
    try {
      // Simular um delay de autenticação
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/')
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-90">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-900 rounded-lg shadow-xl">
        <div className="text-center">
          <Link href="/" className="text-red-600 text-4xl font-bold">VRDFLIX</Link>
          <h2 className="mt-6 text-2xl font-bold text-white">Entre na sua conta</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Ainda não tem uma conta?{' '}
            <Link href="/auth/signup" className="font-medium text-red-600 hover:text-red-500">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 