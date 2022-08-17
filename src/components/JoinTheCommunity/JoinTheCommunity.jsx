import React, { forwardRef } from "react"
import Slider from "react-slick"
import {
  ImageCarousel,
  JoinTheCommunityStyle,
  TextContent,
} from "./JoinTheCommunity.style"
import { Carousel } from "../UIKit"

export const JoinTheCommunity = forwardRef(({}, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return (
    <JoinTheCommunityStyle ref={ref}>
      <div className="container">
        <div className="content">
          <ImageCarousel>
            <Carousel settings={settings}>
              <div>
                <img
                  src="/assets/join-the-community/slider-1.png"
                  alt="Erni and Frens"
                />
              </div>
              <div>
                <img
                  src="/assets/join-the-community/slider-2.png"
                  alt="Erni and Frens"
                />
              </div>
              <div>
                <img
                  src="/assets/join-the-community/slider-3.png"
                  alt="Erni and Frens"
                />
              </div>
            </Carousel>
          </ImageCarousel>

          <TextContent>
            <h2>Join the Community</h2>

            <p>
              Erni and frens is a community of blockchain enthusiasts, as well
              as art & music lovers. When you buy an Erni and Frens NFT, you’re
              not only purchasing an avatar or an exclusive piece of art. You
              are earning community access to a collective whose benefits and
              offerings are fruitfully designed. Your Erni and Fren is your
              access pass to a universe of gamified utility.
            </p>

            <a href="#">Let's join</a>
          </TextContent>
        </div>
      </div>
    </JoinTheCommunityStyle>
  )
})
