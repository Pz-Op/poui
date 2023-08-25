import { main_styles } from '@poui/style'
import { withInstall } from '../utils/index'
import ButtonVue from './src/button.vue'

const theme = main_styles

export const Button = withInstall(ButtonVue)

export default Button
