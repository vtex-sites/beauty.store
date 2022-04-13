export { default } from './MainMenu'

export interface MainMenuList {
  label: string
  href: string
  isHighlight?: boolean
  childrenTitle?: string
  children?: MainMenuList[]
}
export type MainMenuType = 'row' | 'column'
