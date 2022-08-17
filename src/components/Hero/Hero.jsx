import { HeroStyle } from "./Hero.style"
import { Button } from "../UIKit"
import React, { forwardRef } from "react"
import ConnectButton from "../ConnectButton/ConnectButton"

const Hero = forwardRef(({ loading }, ref) => {
  return (
    <HeroStyle ref={ref}>
      <div className="container">
        <div className="content">
          <div className="hero-model-wrapper">
            <img src={`/assets/hero/hero.jpg`} alt="" />
          </div>

          <div className="mint-container">
            <ConnectButton />
          </div>

          <div className="button-wrapper">
            <Button
              variant="outlined"
              target="_blank"
              className="discord"
              href="#"
            >
              JOIN DISCORD
            </Button>
          </div>
        </div>
      </div>
    </HeroStyle>
  )
})

export default Hero
