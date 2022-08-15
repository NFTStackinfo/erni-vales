import React, { forwardRef } from 'react'
import { TeamStyle } from './Team.style'
import { Icon } from '../UIKit'

export const Team = forwardRef(({}, ref) => {
  return (
    <TeamStyle ref={ref}>
      <Icon name="menu" color="black"/>
      <Icon name="arrow-up" color="black"/>
      <Icon name="arrow-down" color="black"/>
      <Icon name="arrow-back" />
      <Icon name="arrow-next" />
      <Icon name="close" color="black"/>
      <Icon name="discord" color="black"/>
      <Icon name="twitter" color="black"/>

      <h1 >Hello world</h1>
    </TeamStyle>
  )
})
