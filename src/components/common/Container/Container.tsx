import type { ReactNode } from 'react'
import React from 'react'

interface ContainerProps {
  children: ReactNode
}

const Container = (props: ContainerProps) => {
  const { children } = props

  return <div className="container">{children}</div>
}

export default Container
