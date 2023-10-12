import { useDarkMode } from '@/context/ThemeModeContext'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Nav () {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isMenuMobile, setMenuMobile] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const toggleMenuMobile = () => {
    setMenuMobile(!isMenuMobile)
  }

  const renderThemeToggle = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'dark') {
      return (
        <button className='' onClick={() => setTheme('light')} type='button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
            />
          </svg>
        </button>
      )
    }
    return (
      <button
        className='rounded'
        onClick={() => setTheme('dark')}
        type='button'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-6 h-6 text-gray-800'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
          />
        </svg>
      </button>
    )
  }
  return (
    <nav className='bg-white fixed shadow-sm w-full dark:bg-gray-800' id='navbar'>
      <div className='mx-auto max-w-7xl'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              type='button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={toggleMenuMobile}
            >
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              {!isMenuMobile && (
                <svg
                  className='show h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              )}

              {!!isMenuMobile && (
                <svg
                  className='show h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
              {
                theme === 'dark'
                ? (
                  <img
                    className='h-8 w-auto'
                    src='/assets/logo-joni-dev-white.webp'
                    alt='Your Company'
                  />
                )
                : (
                  <img
                    className='h-8 w-auto'
                    src='/assets/logo-joni-dev.webp'
                    alt='Your Company'
                  />
                )
              }
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href='#'
                  className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                  aria-current='page'
                >
                  Dashboard
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                >
                  Team
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                >
                  Projects
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>

          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            {renderThemeToggle()}
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMenuMobile && (
        <div className='sm:hidden' id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2 bg-teal-800 dark:bg-white'>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link href='/' className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'>
              Home
            </Link>
            <Link href='/#about'
              className='text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
            About
            </Link>
            <a
              href='#'
              className='text-gray-900 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              Projects
            </a>
            <a
              href='#'
              className='text-gray-900 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              Calendar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
