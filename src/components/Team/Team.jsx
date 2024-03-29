import React, { forwardRef, useState } from "react"
import { TeamItem, TeamList, TeamStyle } from "./Team.style"
import { Icon } from "../UIKit"
import { teamList } from "./data-team"
import { ModalSeeMore } from "./Modal/ModalSeeMore"
import Fade from "react-reveal/Fade";

export const Team = forwardRef(({}, ref) => {
  const [isModalActive, setIsModalActive] = useState(false)
  const [company, setCompany] = useState("")

  const toggleModal = () => setIsModalActive(() => !isModalActive)

  const seeMore = company => {
    toggleModal()
    setCompany(company)
  }

  return (
    <TeamStyle ref={ref}>
      <div className="container">
        <div className="content">
          <Fade bottom>
            <div className="title">
              <h2>
                Meet <br />
                The Team
              </h2>
            </div>
          </Fade>


            <TeamList>
              {teamList.map((item, idx) => (
                <React.Fragment key={`team-member-${idx}`}>
                  <div className={`img-wrapper img-wrapper-${idx + 1}`}>
                    <img src={item.img} alt={item.name} />
                  </div>

                  <h3 className={`name name-${idx + 1}`}>{item.name}</h3>

                  {item?.seeMore ? (
                    <button
                      className={`see-more see-more-${idx + 1}`}
                      onClick={() => seeMore(item.seeMore)}
                    >
                      SEE MORE
                    </button>
                  ) : (
                    <div className={`see-more see-more-${idx + 1}`} />
                  )}
                </React.Fragment>
              ))}
            </TeamList>

          <ModalSeeMore
            isActive={isModalActive}
            toggleModal={toggleModal}
            company={company}
          />
        </div>
      </div>
    </TeamStyle>
  )
})
