import { useEffect, useState, useRef } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Roadmap from "./components/Roadmap/Roadmap"
import { Team } from "./components/Team/Team"
import FAQ from "./components/FAQ/FAQ"
// import Preloader from "./components/Preloader/Preloader";
import Preloader from "./components/Preloader/PreloaderDynamic"
import { useLockedBody } from "./hooks/useLockedBody"
import About from "./components/About/About"
import Bio from "./components/Bio/Bio"
const scrollIntoView = require("scroll-into-view")

function App() {
  const [loading, setLoading] = useState(true)
  const [scrollTo, setScrollTo] = useState(null)
  const [, setLocked] = useLockedBody(true)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const bioRef = useRef(null)
  const roadmapRef = useRef(null)
  const teamRef = useRef(null)
  const communityRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  useEffect(() => {
    if (scrollTo) {
      scrollIntoView(refMapping[scrollTo]?.current, {
        align: {
          top: 0,
        },
      })
      setScrollTo(false)
    }
  }, [scrollTo])

  /*for static preloader*/
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setLocked(false)
    }, 3800)
  }, [])

  const refMapping = {
    "#hero": heroRef,
    "#about": aboutRef,
    "#roadmap": roadmapRef,
    "#bio": bioRef,
    "#team": teamRef,
    "#faq": faqRef,
    "#community": communityRef,
  }

  const handleLinkClick = to => {
    setScrollTo(to)
  }
  //
  // /*for dynamic preloader*/
  const handleLoad = () => {
    setLoading(false)
    setLocked(false)
  }

  return (
    <main>
      {/*for static preloader*/}
      {/*<Preloader className={loading ? "" : "hide-loader"} />*/}
      {/*  for dynamic preloader*/}
      <Preloader onLoad={handleLoad} />
      <div className="main-wrapper">
        <Hero ref={heroRef} loaded={!loading}>
          <Header onLinkClick={handleLinkClick} />
        </Hero>
        <About ref={aboutRef} />
        <Bio ref={bioRef} />
        {/*<Roadmap ref={roadmapRef} />*/}
        <Team ref={teamRef} />
        {/*<FAQ ref={faqRef} />*/}
        {/*<Footer />*/}
      </div>
    </main>
  )
}

export default App
