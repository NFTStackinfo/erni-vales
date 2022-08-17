import { HeroStyle } from "./Hero.style"
import { Button } from "../UIKit"
import React, { forwardRef } from "react"
import ConnectButton from "../ConnectButton/ConnectButton"
import Fade from "react-reveal/Fade"

const Hero = forwardRef(({ children, loaded }, ref) => {
  return (
    <HeroStyle ref={ref}>
      {children}
      <Fade when={loaded} bottom>
        <img className="card card-1" src="assets/hero/card1.png" alt="" />
      </Fade>
      <Fade when={loaded} bottom>
        <img className="card card-2" src="assets/hero/card2.png" alt="" />
      </Fade>

      <div className="container">
        <Fade bottom cascade when={loaded}>
          <div className="content">
            <h1>Welcome to Erni & Frens</h1>
            <p className="text">
              Erni’s Frens have arrived, just in time to celebrate a 40 year
              body of work by world renowned artist Erni Vales
            </p>
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
        </Fade>
      </div>
    </HeroStyle>
  )
})

export default Hero
