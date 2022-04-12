import React from 'react'
import Section from 'src/components/common/Section'
import Container from 'src/components/common/Container'
import RichText from 'src/components/common/RichText'

interface TextProps {
  text: string
}

const Text = ({ text }: TextProps) => {
  return text ? (
    <Section>
      <Container>
        <RichText className="text-content" text={text} />
      </Container>
    </Section>
  ) : null
}

export default Text
