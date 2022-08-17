import React, { forwardRef } from "react";
import { AboutStyle } from "./About.style";
import Fade from "react-reveal/Fade";
import AboutCarousel from "./AboutCarousel";

const About = forwardRef((props, ref) => {
  return (
    <AboutStyle ref={ref}>
      <div className="container">
          <Fade bottom cascade>
              <h1 className="title">About</h1>
            <AboutCarousel />
              <p className='text'>Erni and frens is a 5,555 piece NFT project brought to you by celebrated artist Erni Vales. Paying homage to Erni’s NYC graffiti roots, owning this token will enable our community members  to <span>“tag-to-earn”</span> in the metaverse. Also, hodlers will gain access to exclusive original artwork, merchandise,  and IRL and metaverse events.</p>
          </Fade>
      </div>
    </AboutStyle>
  );
});

export default About;
