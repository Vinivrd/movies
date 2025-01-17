'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import SignUp from '@/app/auth/signup/page'
import SignIn from '@/app/auth/signin/page'

interface AssineProps {
  className?: string
  variant?: 'default' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoggedIn?: boolean
}

export function Assine({ 
  className = '',
  variant = 'default',
  size = 'md',
  isLoggedIn = false
}: AssineProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<'signin' | 'signup'>('signup')

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md'
  const variantStyles = {
    default: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
  }
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (isLoggedIn) {
      router.push('/auth/signout')
    } else {
      setShowModal(true)
      setModalType('signup')
    }
    setIsLoading(false)
  }

  const switchModal = (type: 'signin' | 'signup') => {
    setModalType(type)
  }

  return (
    <>
      <button 
        onClick={handleClick}
        disabled={isLoading}
        className={buttonStyles}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            {isLoggedIn ? 'Saindo...' : 'Carregando...'}
          </>
        ) : (
          isLoggedIn ? 'Sair' : 'Assine Agora'
        )}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-md transition-all duration-300"
            onClick={() => setShowModal(false)}
          />
          <div className="relative z-50 w-full max-w-md animate-fadeIn">
            {modalType === 'signup' ? (
              <SignUp 
                onClose={() => setShowModal(false)} 
                onSwitchToSignIn={() => switchModal('signin')}
              />
            ) : (
              <SignIn 
                onClose={() => setShowModal(false)}
                onSwitchToSignUp={() => switchModal('signup')}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}
