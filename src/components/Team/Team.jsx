import React, { forwardRef } from 'react'
import { TeamStyle } from './Team.style'
import { Icon } from '../UIKit'

export const Team = forwardRef(({}, ref) => {
  return (
    <TeamStyle ref={ref}>
      <Icon name="menu" />
      <Icon name="arrow-up" />
      <Icon name="arrow-down" />
      <Icon name="arrow-back" />
      <Icon name="arrow-next" />
      <Icon name="close" />
      <Icon name="discord" />
      <Icon name="twitter" />
    </TeamStyle>
  )
})
