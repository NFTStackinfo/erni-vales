import React, { forwardRef } from "react"
import { AboutStyle } from "./About.style"
import Fade from "react-reveal/Fade"

const About = forwardRef((props, ref) => {
  return (
    <AboutStyle ref={ref}>
      <div className="container">
        <Fade bottom cascade>
          <h1 className="title">ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at
            commodi consequatur, delectus ex fugit inventore necessitatibus,
            neque non nostrum odio omnis quidem quis repudiandae sit unde, vero.
            Ab accusamus corporis culpa debitis deleniti dicta dolorum ducimus
            facilis fuga illum laboriosam maiores molestiae nemo nesciunt nisi
            nulla obcaecati, perferendis praesentium quas quasi repellendus
            repudiandae soluta vitae! Accusamus architecto, aspernatur
            blanditiis, corporis cupiditate deleniti doloremque ducimus enim
            esse et eveniet exercitationem explicabo facere fugiat id illo
            incidunt inventore iusto labore minima minus molestias
            necessitatibus neque nisi nulla obcaecati quae quos rem repellat
            repellendus rerum sint sunt suscipit ullam veniam, vero voluptas.
            Facere harum ipsam pariatur provident quam qui quia quidem quo!
            Explicabo, molestias, voluptas! Alias aperiam commodi, consequuntur
            dolor ducimus eveniet ex facere illum incidunt magnam maxime, nulla
            odio, quam quisquam rerum? Delectus esse eveniet laudantium nobis
            omnis pariatur sunt vero. Amet aperiam deserunt eos error, impedit
            magni maxime saepe similique!
          </p>
        </Fade>
      </div>
    </AboutStyle>
  )
})

export default About
