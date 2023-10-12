function setThemeMode (theme) {
  localStorage.setItem('theme', theme)
}
function getThemeMode () {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme')
  }
}

export {
  setThemeMode,
  getThemeMode
}
