import type { ReactNode } from 'react'
import React, { Children, useMemo } from 'react'
import { useStepper } from 'src/contexts/StepperContext'
import Section from 'src/components/common/Section'

interface StepperProps {
  children: ReactNode
}

const Stepper = (props: StepperProps) => {
  const { children } = props

  const { step } = useStepper()

  const childrenArray = useMemo(() => Children.toArray(children), [children])
  const currentChild = useMemo(() => childrenArray[step], [childrenArray, step])

  return <Section>{currentChild}</Section>
}

export default Stepper
