'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null)
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
          <Link href='/' className='mb-12 cursor-pointer items-center gap-2 flex'>
              <Image src='/icons/logo.svg' width={34} height={34} alt='Nika Logo' className='size-[24px] max-xl:size-14' />
          <h1 className='sidebar-logo'>Nika</h1>
          </Link>

         <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
              {user
                ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'
              }
              <p className='text-16 font-normal text-gray-600'>
                {user
                  ? 'Link your account to get started'
                  : 'Please enter your details'
                }
              </p>
            </h1>
          </div>
        </header>
        {user ? (
          <div className='flex flex-col gap-4'>
            {/* Plaid Link */}
          </div>
        ) : (
          <>
            FORM
          </>
        )
        }
    </section>
  )
}

export default AuthForm