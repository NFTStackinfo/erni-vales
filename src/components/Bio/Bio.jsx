import React, {forwardRef, useState} from "react";
import {BioStyle} from "./Bio.style";
import Fade from "react-reveal/Fade";
import {Button} from "../UIKit";
import Drawer from "./Drawer/Drawer";
import {useLockedBody} from "../../hooks/useLockedBody";

const Bio = forwardRef((props, ref) => {
  const [openProjectDrawer, setOpenProjectDrawer] = useState(false)
  const [, setLocked] = useLockedBody()

  const handleDrawerOpen = () => {
    setLocked(true)
    setOpenProjectDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenProjectDrawer(false)
    setLocked(false)
  }

  return (
    <BioStyle ref={ref}>

      <div className="img-wrapper">
        <img src="assets/bio/bg.jpg" alt=""/>
      </div>
      <div className="container">
        <div className="bio-wrapper">


          <div className="bio-content-wrapper">
              <div className="bio-text">

                <h1 className="title">Erni Vales’s Bio</h1>
                <div className="bio-content-inner">

                  <Fade bottom>
                    <p className='text'>
                      Erni Vales has been creating for over four decades. The 80’s, Erni’s favorite decade, is when He became an accomplished graffiti artist. Vales then began the first graffiti clothing company, L.E.S. Clothing Co. Thereafter, came the first graffiti furniture fabrication with Ferra Design, all while painting canvas, hosting gallery shows and painting NYC subway cars and walls.
                    </p>
                    <p className='text'>
                      The 90s led him to Hollywood, where he became the first graffiti artists in the Scenic Artists Union of California. Vales, obliged and happy to do so there created murals for many TVseries and movies, murals and graffiti. When that gig ended Erni’s heart drove him back to his NYC roots to begin murals throughout the Chelsea Market. Vales was commissioned to paint loading bays, offices, elevators, probably the most magical creative time of his monstrously growing career. Chelsea Market exposed my art to famed celebrity photographer David LaChapelle, a string of works ensued, including well known photo shoots with Madonna, Elton John, Mariah Carey, Lil Kim and so many others. LaChapelle’s and Vales’s creative relationship went on for almost 13 years.
                    </p>
                    <p className="text">
                      Erni was looking to establish roots of his own. The Miami Art scene was booming in Wynwood. There, he achieved a personal dream-goal of his of opening his own gallery in Wynwood, the urban art capital of the world. There, Vales painted and painted and painted. He painted 169 paintings in 13 months there, that’s 13 per month, for 13 months. His motto was, nothing great happens easy, without struggle greatness cannot happen. Ultimately, Wynwood changed, gentrified, and he moved to a studio in Little River Miami where he embarked on his newest series currently in 2022. The ReMixes. New works bearing the style he has honed and crafted over 4 decades of artistic hard knock life teachings, some brand new, some “ReMixed” from paintings Vales thought had potential but were still subpar. A new experiment, a new journey. Like an old record Remixed and brought back tolife and hopefully, some glory. This idea of remixing attracted Vales to the NFT space where he could Create a few hundred character traits and birth thousands of versions of a character. Inky was born. Inky is a brain child of Erni inspired by his years of character creation. Inky will be a set of 5,555 unique creations auto generated from 275 unique features. It’s not an easy venture but after 40 consistent years Vales isconfident in making the difficult challenges EZ. Actually, EZPZ!
                    </p>

                  </Fade>
                </div>
                {/*<span className='overlay'/>*/}

              </div>
            <div className="bio-footer">
              <h3>Professional Resume </h3>
              <Button
                className='see-more'
                variant="outlined"
                withIcon={false}
                onClick={handleDrawerOpen}
              >
                See more
              </Button>
            </div>
          </div>
          <Drawer opened={openProjectDrawer} onDrawerClose={handleDrawerClose}>
            <p>asdasdasd</p>
          </Drawer>


        </div>
      </div>

    </BioStyle>
  );
});

export default Bio;
