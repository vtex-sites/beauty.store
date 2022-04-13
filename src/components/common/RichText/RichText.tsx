import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { HTMLAttributes } from 'react'

export interface RichTextProps extends HTMLAttributes<HTMLDivElement> {
  text: string
}

const RichText = ({ text, ...otherProps }: RichTextProps) => {
  const source = text.replace(/\\n/gi, '\n &nbsp;')

  return <ReactMarkdown {...otherProps}>{source}</ReactMarkdown>
}

export default RichText
