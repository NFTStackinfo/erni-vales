import { DrawerWrapperStyle, DrawerStyle } from "./Drawer.style"
import { Icon } from "../../UIKit"
import project from "./data"

const Drawer = ({ className, opened, onDrawerClose }) => {
  return (
    <DrawerWrapperStyle opened={opened} className={className}>
      <div className="overlay" onClick={onDrawerClose} />
      <DrawerStyle opened={opened}>
        <div className="drawer-header">
          <h3 className="title">Projects with David LaChapelle</h3>
          <button onClick={onDrawerClose} className="btn-close">
            <Icon name="close" size={44} />
          </button>
        </div>
        <div className="drawer-body">
          <ul className="project-list">
            {project.map(({ left, right }, index) => {
              return (
                <li key={index}>
                  <div className="left half">
                    <strong>{left.title}</strong>
                    <p>{left.desc}</p>
                  </div>
                  <div className="right half">
                    <strong>{right.title}</strong>
                    <p>{right.desc}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </DrawerStyle>
    </DrawerWrapperStyle>
  )
}

export default Drawer
