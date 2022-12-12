import React from 'react'
import { Section, Title } from './styles'

export const Layout = ({ children, title }) => (
  <Section>
    {title && <Title>{title}</Title>}
    {children}
  </Section>
)
