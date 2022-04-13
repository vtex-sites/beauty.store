import type { ReactNode } from 'react'
import React, { useCallback, createContext, useState, useContext } from 'react'

interface StepperContextValue {
  step: number
  goToPreviousStep: () => void
  goToNextStep: () => void
}

interface StepperProviderProps {
  children: ReactNode
}

const StepperContext = createContext<StepperContextValue>(
  {} as StepperContextValue
)

export const StepperProvider = (props: StepperProviderProps) => {
  const { children } = props

  const [step, setStep] = useState(0)

  const goToPreviousStep = useCallback(
    () => setStep((oldStep) => oldStep - 1),
    [setStep]
  )

  const goToNextStep = useCallback(
    () => setStep((oldStep) => oldStep + 1),
    [setStep]
  )

  return (
    <StepperContext.Provider value={{ step, goToPreviousStep, goToNextStep }}>
      {children}
    </StepperContext.Provider>
  )
}

export const useStepper = () => {
  const context = useContext(StepperContext)

  if (!context) {
    throw new Error('useStepper must be used within a StepperProvider')
  }

  return context
}
