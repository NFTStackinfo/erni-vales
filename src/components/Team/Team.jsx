import React, { forwardRef, useState } from 'react'
import { TeamItem, TeamList, TeamStyle } from './Team.style'
import { Icon } from '../UIKit'
import { teamList } from './data-team'
import { ModalSeeMore } from './Modal/ModalSeeMore'

export const Team = forwardRef(({}, ref) => {
  const [isModalActive, setIsModalActive] = useState(false)
  const [company, setCompany] = useState('')

  const toggleModal = () => setIsModalActive(() => !isModalActive)

  const seeMore = (company) => {
    toggleModal()
    setCompany(company)
  }


  return (
    <TeamStyle ref={ref}>
      <div className="container">
        <div className="content">
          <div className="title">
            <h2>
              Meet <br />
              The Team
            </h2>
          </div>

          <TeamList>
            {
              teamList.map((item, idx) => (<>
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
                ) : <div  className={`see-more see-more-${idx + 1}`}/>}


                <ModalSeeMore isActive={isModalActive} toggleModal={toggleModal}
                              company={company} />
              </>))}

          </TeamList>
        </div>
      </div>
    </TeamStyle>
  )
})
