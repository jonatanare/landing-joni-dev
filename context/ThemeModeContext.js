import { getThemeMode, setThemeMode } from '@/lib/localStorage'
import React, { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

export function DarkModeProvider ({ children }) {
  const [theme, setTheme] = useState(() => {
    // Verifica si hay un valor en localStorage
    const savedTheme = getThemeMode()
    console.log(savedTheme)
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    console.log(typeof newTheme)
    console.log('newTheme', newTheme)

    // Guarda la preferencia en el localStorage
    setThemeMode(newTheme)

    setTheme(newTheme)
  }

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode () {
  return useContext(DarkModeContext)
}
