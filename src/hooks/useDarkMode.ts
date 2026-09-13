import { useState, useEffect, useCallback } from 'react'

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', newMode)
      return newMode
    })
  }, [])

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode')
    if (storedMode !== null) {
      setIsDarkMode(storedMode === 'true')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return { isDarkMode, toggleDarkMode }
}