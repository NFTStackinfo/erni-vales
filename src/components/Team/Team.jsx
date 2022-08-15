import React, { forwardRef } from 'react'
import { TeamItem, TeamList, TeamStyle } from './Team.style'
import { Icon } from '../UIKit'
import { teamList } from './data-team'

export const Team = forwardRef(({}, ref) => {
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
                <div className={`img-wrapper img-wrapper-${idx+1}`}>
                  <img src={item.img} alt={item.name} />
                </div>

                <h3 className={`name name-${idx+1}`}>{item.name}</h3>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`link link-${idx+1}`}
                >
                  SEE MORE
                </a>
              </>))}

          </TeamList>
        </div>
      </div>
    </TeamStyle>
  )
})
