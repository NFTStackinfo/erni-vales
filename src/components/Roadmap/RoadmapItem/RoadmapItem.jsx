import React, { useEffect, useRef, useState } from 'react'
import Fade from 'react-reveal/Fade'
import { RoadmapItemStyle } from './RoadmapItem.style'
import { normalizeRange } from '../../../utils/math'

function RoadmapItem({title, content, start, last, className='' }) {
  const progressRef = useRef()
  const [loadedHeight, setLoadedHeight] = useState(0)
  const [stepActive, setStepActive] = useState(false)

  const handleResize = () => {
    handleScroll()
  }

  const handleScroll = () => {
    const rect = progressRef.current?.getBoundingClientRect()
    if (rect) {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      const topPart = (windowHeight * 2) / 3
      const loadedHeight = ~~(rect.height - rect.bottom + topPart)
      setLoadedHeight(normalizeRange(loadedHeight, 0, rect.height))
      setStepActive((loadedHeight > 0))
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

	return (
		<RoadmapItemStyle className={[start ? 'start' : '', last ? 'last' : '', 'roadmap-item', className].join(' ')}>
			<div className="progress" ref={progressRef}>
				<div className={["progress__circle", stepActive ? 'active' : ''].join(' ')} />
				<div className="progress__bar" />
			</div>

			<Fade bottom duration={1000} distance="25%">
				<div className="content">
					<h4>{title}</h4>

					<div className="description">{content}</div>
				</div>
			</Fade>
		</RoadmapItemStyle>
	)
}

export default RoadmapItem
