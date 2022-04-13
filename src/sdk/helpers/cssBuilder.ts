type Item = [string, boolean]

export default function cssBuilder(list: Item[]) {
  if (!list) return ''

  const classNames = []

  for (const item of list) {
    const [className, isActive] = item

    if (isActive) {
      classNames.push(className)
    }
  }

  return classNames.join(' ')
}
