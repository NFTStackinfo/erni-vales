import React, { forwardRef, useMemo, useState } from "react";
import { TeamStyle } from "./Team.style";
import Fade from "react-reveal/Fade";
import teamList from "./dataTeam";
import { Carousel, Icon } from "../UIKit";
import { theme } from "../../styles/global/theme";

const Arrow = ({ className, onClick, direction, size = 72, color }) => {
  return (
    <button onClick={onClick} className={className}>
      <Icon
        name={`arrow-${direction}`}
        color={theme.colors.black}
        size={size}
      />
    </button>
  );
};

const Team = forwardRef((props, ref) => {
  const [current, setCurrent] = useState(1);
  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: false,
      speed: 500,
      autoplaySpeed: 2000,
      autoplay: true,
      nextArrow: <Arrow direction={"right"} />,
      prevArrow: <Arrow direction={"left"} />,
      responsive: [
        {
          breakpoint: theme.breakpoints.md,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: theme.breakpoints.sm,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  }, []);

  const handleBeforeChange = async (oldIndex, newIndex) => {
    setCurrent(newIndex + 1);
  };
  return (
    <TeamStyle ref={ref}>
      <div className="container">
        <h1 className="title">OUR TEAM</h1>
        <Fade bottom cascade>
          <Carousel settings={settings} beforeChange={handleBeforeChange}>
                  {teamList.map(({ img, url,  name, position }, index) => {
                    return (
                      <div className="team-card" key={index}>
                        <div className="img-wrapper">
                          <img src={img} alt={name} />
                        </div>
                        <p className="name">
                          {url ? (
                            <a href={url} target="_blank" rel="noreferrer">
                              {name}
                            </a>
                          ) : (
                            name
                          )}
                        </p>
                        <p className="position">{position}</p>
                      </div>
                    );
                  })}
          </Carousel>
        </Fade>
        <div className="item-number">{current} - {teamList.length}</div>
      </div>
    </TeamStyle>
  );
});

export default Team;
