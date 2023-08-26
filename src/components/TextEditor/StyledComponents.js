import styled from 'styled-components'

export const TextArea = styled.textarea`
  color: #000000;
  font-size: 18px;
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`

export const BoldButton = styled.button`
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
  font-size: 18px;
`

export const ItalicButton = styled.button`
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
  font-size: 18px;
`

export const UnderlineButton = styled.button`
  color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')};
  font-size: 18px;
`
