export { default } from './MainMenu'

export interface MainMenuList {
  label: string
  href: string
  target?: string
  isHighlight?: boolean
  childrenTitle?: string
  children?: MainMenuList[]
}
