import React from 'react'
import CtaButton from 'src/components/ui/CtaButton'
import { useStepper } from 'src/contexts/StepperContext'
import { useScanner } from 'src/contexts/ScannerContext'
import Section from 'src/components/common/Section'
import Container from 'src/components/common/Container'
import NavbarSpacer from 'src/components/common/NavbarSpacer'
import ScannerStepOption from 'src/components/sections/ScannerStep/components/ScannerStepOption'

interface StepOptionsProps {
  title: string
  description?: string
  imageSrc: string
  value: string
}
interface Props {
  title: string
  message: string
  img: string
  buttonText: string
  stepOptions: StepOptionsProps[]
  stepSpecification: string
}

function ScannerStep({
  title,
  message,
  img,
  buttonText,
  stepOptions,
  stepSpecification,
}: Props) {
  const { step, goToNextStep } = useStepper()
  const { addSelectedOption } = useScanner()

  const [selectedOption, SetSelectedOption] = React.useState('')

  const handleGoNextStep = () => {
    goToNextStep()
    addSelectedOption({
      key: stepSpecification,
      value: selectedOption,
    })
  }

  return (
    <>
      <NavbarSpacer />
      <Section className="scanner-step">
        <Container>
          <div className="grid-step">
            <div className="StepImage">
              <img
                className="scanner__img"
                width={673}
                height={844}
                src={img}
                alt="Scanner"
              />
            </div>
            <div className="StepTrack">
              <div className="StepTrackProgressBarContainer">
                <div
                  className="StepTrackProgressBarContent"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
              <h2 className="StepTrackTitle">{title}</h2>
              <p className="StepTrackMessage">{message}</p>
            </div>
            <div className="StepOptions">
              {stepOptions.map((item, indice) => {
                return (
                  <ScannerStepOption
                    key={indice}
                    title={item.title}
                    description={item.description}
                    value={item.value}
                    isSelected={selectedOption === item.value}
                    setSelectedOption={SetSelectedOption}
                    imageSrc={item.imageSrc}
                  />
                )
              })}
            </div>
            <CtaButton text={buttonText} handleClick={handleGoNextStep} />
          </div>
        </Container>
      </Section>
    </>
  )
}

export default ScannerStep
