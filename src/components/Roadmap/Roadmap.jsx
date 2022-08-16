import React, { forwardRef } from 'react'
import { RoadmapContent, RoadmapStyle } from './Roadmap.style'
import RoadmapItem from './RoadmapItem/RoadmapItem'
import { roadmapData } from './roadmap-data'

const Roadmap = forwardRef((props, ref) => {
	return (
		<RoadmapStyle ref={ref} id="roadmap" className="wrapper">
			<div className="container">
        <RoadmapContent>
          <h2>Roadmap</h2>

          <div className="roadmap-body">
            <RoadmapItem start/>

            {roadmapData.map((item, index) => (
              <RoadmapItem
                key={`roadmap-item-${index}`}
                {...item}
                last={index === roadmapData.length - 1}
              />
            ))}
          </div>
        </RoadmapContent>
			</div>
		</RoadmapStyle>
	)
})

export default Roadmap
