import * as React from "react"
import IcomoonReact from "icomoon-react"
import iconSet from "./selection.json"

export const Icon = ({ color, size = 44, name, className = "", onClick }) => {
  return (
    <IcomoonReact
      onClick={onClick}
      className={`icon ${className}`}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={name}
    />
  )
}
