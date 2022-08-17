import React, { forwardRef, useState } from "react"
import { FAQStyle, FAQTopImg, QuestionsContainer } from "./FAQ.style"
import Collapsible from "react-collapsible"
import { Icon } from "../UIKit"
import Fade from "react-reveal/Fade"
import data from "./data-FAQ"
import { theme } from "../../styles/global/theme"

const FAQ = forwardRef((props, ref) => {
  const [openPosition, setOpenPosition] = useState(null)

  const handleTriggerClick = position => {
    if (openPosition === position) {
      setOpenPosition(null)
    } else {
      setOpenPosition(position)
    }
  }
  return (
    <FAQStyle ref={ref}>
      <FAQTopImg>
        <img src="/assets/FAQ/FAQ-top.jpg" alt="Enri vales's" />
      </FAQTopImg>

      <div className="wrapper">
        <div className="container">
          <div className="content">
            <div className="title">
              <h2>FAQS</h2>
            </div>

            <QuestionsContainer>
              {data.map((q, i) => {
                return (
                  <Collapsible
                    key={"Collapsible" + i}
                    handleTriggerClick={handleTriggerClick}
                    transitionTime={400}
                    accordionPosition={i}
                    open={openPosition === i}
                    trigger={
                      <Fade
                        triggerOnce
                        cascade
                        bottom
                        fraction={0.8}
                        duration={600}
                      >
                        <div className="trigger-inner">
                          <h3>{q.question}</h3>
                          <Icon
                            name={
                              openPosition === i ? "arrow-up" : "arrow-down"
                            }
                            size={32}
                            color={theme.colors.white}
                          />
                        </div>
                      </Fade>
                    }
                  >
                    <div>{q.answer}</div>
                  </Collapsible>
                )
              })}
            </QuestionsContainer>
          </div>
        </div>
      </div>
    </FAQStyle>
  )
})

export default FAQ
