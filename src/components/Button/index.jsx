import React from 'react'
import { Container } from './style'

const Button = ({children, onClick}) => {
  return (
    <Container onClick={onClick}>{children || "Button"}</Container>
  )
}

export default Button