import React from 'react'
import CtaButton from 'src/components/ui/CtaButton'
import { useStepper } from 'src/contexts/StepperContext'
// import { useScanner } from 'src/contexts/ScannerContext'
import Section from 'src/components/common/Section'
import Container from 'src/components/common/Container'
import NavbarSpacer from 'src/components/common/NavbarSpacer'
import ScannerStepOption from 'src/components/sections/ScannerStep/components/ScannerStepOption'
// import { Image } from 'src/components/ui/Image'

interface StepOptionsProps {
  title: string
  description: string
  imageSrc: string
}
interface Props {
  title: string
  message: string
  img: string
  buttonText: string
  stepOptions: StepOptionsProps[]
}

function ScannerStep({ title, message, img, buttonText, stepOptions }: Props) {
  const { step, goToNextStep } = useStepper()

  const [selectedOption, SetSelectedOption] = React.useState('')

  React.useEffect(() => {}, [selectedOption])

  stepOptions = [
    {
      title: 'Pele Seca',
      description:
        'Normalmente tem poros pouco visíveis, aspecto opaco com pouca luminosidade, costuma ser mais áspera ao toque e tem maior propensão a descamação e vermelhidão',
      imageSrc: '/pele/pele-seca.jpg',
    },
    {
      title: 'Pele Mista',
      description:
        'Apresenta caracterísitcas oleosas e poros dilatados na "Zona T" do rosto (testa, nariz e queixo) e, em contrapartida, textura aveludada, sem brilho excessivo ou até com toque seco, nas outras regiões',
      imageSrc: '/pele/pele-mista.jpg',
    },
    {
      title: 'Pele Oleosa',
      description:
        'A pele oleosa é aquela com um aspecto mais brilhoso e espesso, possui toque untoso e apresenta maior quantidade de poros dilatados por todo o rosto',
      imageSrc: '/pele/pele-oleosa.jpg',
    },
    {
      title: 'Pele Normal',
      description:
        'Tem textura aveludada, não apresenta excesso de brilho nem costuma sofrer ressecamento ou descamação. Geralmente tem poros pequenos e pouco visíveis, e é lisa ao toque',
      imageSrc: '/pele/pele-normal.jpg',
    },
  ]

  return (
    <>
      <NavbarSpacer />
      <Section className="scanner-step">
        <Container>
          <div className="grid-step">
            <div className="StepImage">
              {/* <Image
              className="scanner__img"
              width={673}
              height={844}
              src={img}
              alt="Mulher sorrindo"
            /> */}
              <img
                className="scanner__img"
                width={673}
                height={844}
                src={img}
                alt="Scanner"
              />
            </div>
            <div className="StepTrack">
              STEP: {step}
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
                    isSelected={selectedOption === item.title}
                    setSelectedOption={SetSelectedOption}
                    imageSrc={item.imageSrc}
                  />
                )
              })}
            </div>
            <CtaButton text={buttonText} handleClick={goToNextStep} />
          </div>
        </Container>
      </Section>
    </>
  )
}

export default ScannerStep
