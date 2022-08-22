import { useEffect, useState } from "react"
import { HeaderStyle } from "./Header.style"
import { Icon } from "../UIKit"
import { useLockedBody } from "../../hooks/useLockedBody"
import { navList, socialList } from "./dataHeader"

const Header = ({ onLinkClick }) => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [locked, setLocked] = useLockedBody()
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    if (drawerOpened) {
      document.body.classList.add("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [drawerOpened])
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 0) {
      return setSticky(true)
    }
    setSticky(false)
  }
  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened)
    setLocked(!locked)
  }

  const handleMenuLinkClick = to => {
    if (drawerOpened) {
      setDrawerOpened(false)
      setLocked(false)
    }
    onLinkClick(to)
  }
  return (
    <HeaderStyle
      className={`${drawerOpened ? "open" : sticky ? "sticky" : ""}`}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo-wrapper">
            <div className="logo" onClick={() => handleMenuLinkClick("#hero")}>
              <img src="/logo.png" alt="logo" />
              {/*<strong>LOGO</strong>*/}
            </div>
          </div>

          <nav className="header-nav">
            <div className="header-nav-inner">
              <ul className="header-nav-list">
                {navList.map(({ to, title }) => {
                  return (
                    <li key={to} onClick={() => handleMenuLinkClick(to)}>
                      {title}
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>
          <button
            className="hamburger"
            type="button"
            onClick={handleDrawerToggle}
          >
            <Icon size={40} name={drawerOpened ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
