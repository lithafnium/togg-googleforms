import React from 'react'
import { FancyButton } from './styles'

const ExampleComponent = ({ alertText }) => (
  <FancyButton onClick={() => alert(alertText)}>Click Me!</FancyButton>
)

export default ExampleComponent
