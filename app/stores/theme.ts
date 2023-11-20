export const useThemeStore = defineStore('theme', () => {

  const colorMode = useColorMode();

  const themes = [
    "system",
    "light",
    "dark"
  ]
  //
  // const theme = ref('dark')
  //
  // if (process.client && localStorage.getItem('theme')) {
  //   theme.value = localStorage.getItem('theme')
  // }

  function setTheme(param) {
    // localStorage.setItem('theme', param)
    colorMode.preference = param
  }

  function toggleMode() {
    if (colorMode.preference === 'system') {
      colorMode.preference = 'dark'
    } else if (colorMode.preference === 'dark') {
      colorMode.preference = 'light'
    } else if (colorMode.preference === 'light') {
      colorMode.preference = 'dark'
    }
  }

  return { themes, setTheme, toggleMode, colorMode }
})
