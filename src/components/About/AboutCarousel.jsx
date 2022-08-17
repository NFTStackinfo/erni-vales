import React, { useEffect, useMemo, useState } from "react"
import { Carousel, Icon } from "../UIKit"
import { theme } from "../../styles/global/theme"

const Arrow = ({ className, onClick, direction, size = 24, color }) => {
  return (
    <button onClick={onClick} className={className}>
      {/*<p>asdasd</p>*/}
      <Icon name={`arrow-${direction}`} color={color} size={size} />
    </button>
  )
}

const AboutCarousel = () => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let slider1
  let slider2

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  const settings = useMemo(() => {
    return {
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      focusOnSelect: false,
      adaptiveHeight: true,
      fade: true,
      nextArrow: (
        <Arrow direction={"next"} size="100%" color={theme.colors.white} />
      ),
      prevArrow: (
        <Arrow direction={"back"} size="100%" color={theme.colors.white} />
      ),
    }
  }, [])
  const settings2 = useMemo(() => {
    return {
      infinite: true,
      arrows: false,
      slidesToShow: 7,
      slidesToScroll: 1,
      swipe: true,
      focusOnSelect: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: theme.breakpoints.xl,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: theme.breakpoints.lg,
          settings: {
            slidesToShow: 5,
          },
        },
      ],
    }
  }, [])

  return (
    <div className="carousel-wrapper">
      <Carousel
        asNavFor={nav1}
        ref={slider => (slider2 = slider)}
        settings={settings}
        className="carousel"
      >
        {[...Array(17).keys()].map((_, index) => {
          return (
            <div className="img-wrapper">
              <div className="img">
                <img src={`assets/about/${index + 1}.jpg`} alt="" />
              </div>
            </div>
          )
        })}
      </Carousel>
      <Carousel
        asNavFor={nav2}
        ref={slider => (slider1 = slider)}
        settings={settings2}
        className="carousel2"
      >
        {[...Array(17).keys()].map((_, index) => {
          return (
            <div className="img-wrapper">
              <div className="img">
                <img src={`assets/about/${index + 1}.jpg`} alt="" />
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default AboutCarousel
