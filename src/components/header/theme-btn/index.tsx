'use client'

import { useState } from 'react'

const themes = ['contrast', 'dark_mode', 'light_mode']

export function ThemeBtn() {
  const [theme, setTheme] = useState(0)

  function handleTheme() {
    const themeIndex = theme === themes.length - 1 ? 0 : theme + 1
    setTheme(themeIndex)
  }

  return (
    <button onClick={handleTheme} type="button" className="mui-icon-filled">
      {themes[theme]}
    </button>
  )
}
