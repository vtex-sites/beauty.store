import type { ReactNode } from 'react'
import React from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container = (props: ContainerProps) => {
  const { children, className = '' } = props

  return <div className={`container ${className}`}>{children}</div>
}

export default Container
