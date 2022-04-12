import React from 'react'
import Section from 'src/components/common/Section'
import Container from 'src/components/common/Container'

interface TextProps {
  text: string
}

const Text = ({ text }: TextProps) => {
  return text ? (
    <Section>
      <Container>
        <div
          className="text-content"
          dangerouslySetInnerHTML={{ __html: text.replace(/\\n/g, '<br />') }}
        />
      </Container>
    </Section>
  ) : null
}

export default Text

// const  = (props: TextProps) => {
//   const { text } = props
//   // const divRef = React.useRef(null)
//   const divRef = createRef()

// }
