import { applyTheme, argbFromHex, themeFromSourceColor } from '@material/material-color-utilities'

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex('#4285F4'), [
  {
    name: 'custom-1',
    value: argbFromHex('#ffd822'),
    blend: true,
  },
])
function themeSwicth(check: boolean) {
  // Apply the theme to the body by updating custom properties for material tokens
  applyTheme(theme, { target: document.body, dark: check })
  console.warn(1)
}

export default { themeSwicth }
