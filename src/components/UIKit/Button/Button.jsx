import * as React from "react"
import { ButtonStyle } from "./Button.style"
import { theme } from "../../../styles/global/theme"
import { Icon } from "../Icons/Icon"

export const Button = ({
  className,
  children,
  variant = "primary",
  onClick,
  iconName = "discord",
  withIcon = true,
  isLink = true,
  ...props
}) => {
  return (
    <ButtonStyle
      variant={variant}
      onClick={onClick}
      className={className}
      rel="noreferrer"
      as={isLink ? "a" : "button"}
      {...props}
    >
      {withIcon && <Icon name={iconName} color={theme.colors.black} />}
      {children}
    </ButtonStyle>
  )
}
