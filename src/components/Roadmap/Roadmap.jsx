import Fade from "react-reveal/Fade"
import RoadmapStyled, { RoadmapBody, RoadmapSection } from "./Roadmap.style"

import { forwardRef } from "react"

const Roadmap = forwardRef(({ className, children }, ref) => {
  return (
    <RoadmapStyled className={className} ref={ref}>
      <div className="container">
        <div>
          <Fade bottom>
            <h1 className="title">Roadmap</h1>
          </Fade>
        </div>
        <RoadmapBody>
          <RoadmapSection className="odd">
            <h2 className="section-number">01</h2>
            <Fade bottom distance="300px">
              <span className="roadmap__dot" />
            </Fade>
            <Fade bottom cascade distance="150px">
              <div className="section-content">
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis corporis culpa deleniti dolores earum, iste
                  necessitatibus, nobis porro, qui quidem quos vel? Beatae
                  consectetur doloremque enim esse in inventore numquam quidem
                  sit. At culpa dolorum fugit harum labore. Adipisci assumenda
                  consequuntur deserunt earum ipsam iste magnam, minus molestias
                  natus nesciunt officia tempora veniam vero. A ab aperiam
                  architecto aut beatae, cum delectus doloribus labore laborum
                  molestias necessitatibus nostrum quidem recusandae rem
                  repudiandae sunt totam vero?
                </p>
              </div>
            </Fade>
          </RoadmapSection>

          <RoadmapSection className="even">
            <h2 className="section-number">02</h2>
            <Fade bottom distance="300px">
              <span className="roadmap__dot" />
            </Fade>
            <Fade bottom cascade distance="150px">
              <div className="section-content">
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis corporis culpa deleniti dolores earum, iste
                  necessitatibus, nobis porro, qui quidem quos vel? Beatae
                  consectetur doloremque enim esse in inventore numquam quidem
                  sit. At culpa dolorum fugit harum labore. Adipisci assumenda
                  consequuntur deserunt earum ipsam iste magnam, minus molestias
                  natus nesciunt officia tempora veniam vero. A ab aperiam
                  architecto aut beatae, cum delectus doloribus labore laborum
                  molestias necessitatibus nostrum quidem recusandae rem
                  repudiandae sunt totam vero?
                </p>
              </div>
            </Fade>
          </RoadmapSection>

          <RoadmapSection className="odd">
            <h2 className="section-number">03</h2>
            <Fade bottom distance="300px">
              <span className="roadmap__dot" />
            </Fade>
            <Fade bottom cascade distance="150px">
              <div className="section-content">
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis corporis culpa deleniti dolores earum, iste
                  necessitatibus, nobis porro, qui quidem quos vel? Beatae
                  consectetur doloremque enim esse in inventore numquam quidem
                  sit. At culpa dolorum fugit harum labore. Adipisci assumenda
                  consequuntur deserunt earum ipsam iste magnam, minus molestias
                  natus nesciunt officia tempora veniam vero. A ab aperiam
                  architecto aut beatae, cum delectus doloribus labore laborum
                  molestias necessitatibus nostrum quidem recusandae rem
                  repudiandae sunt totam vero?
                </p>
              </div>
            </Fade>
          </RoadmapSection>

          <RoadmapSection className="even">
            <h2 className="section-number">04</h2>
            <Fade bottom distance="300px">
              <span className="roadmap__dot" />
            </Fade>
            <Fade bottom cascade distance="150px">
              <div className="section-content">
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis corporis culpa deleniti dolores earum, iste
                  necessitatibus, nobis porro, qui quidem quos vel? Beatae
                  consectetur doloremque enim esse in inventore numquam quidem
                  sit. At culpa dolorum fugit harum labore. Adipisci assumenda
                  consequuntur deserunt earum ipsam iste magnam, minus molestias
                  natus nesciunt officia tempora veniam vero. A ab aperiam
                  architecto aut beatae, cum delectus doloribus labore laborum
                  molestias necessitatibus nostrum quidem recusandae rem
                  repudiandae sunt totam vero?
                </p>
              </div>
            </Fade>
          </RoadmapSection>

          <RoadmapSection className="odd">
            <h2 className="section-number">05</h2>
            <Fade bottom distance="300px">
              <span className="roadmap__dot" />
            </Fade>
            <Fade bottom cascade distance="150px">
              <div className="section-content">
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis corporis culpa deleniti dolores earum, iste
                  necessitatibus, nobis porro, qui quidem quos vel? Beatae
                  consectetur doloremque enim esse in inventore numquam quidem
                  sit. At culpa dolorum fugit harum labore. Adipisci assumenda
                  consequuntur deserunt earum ipsam iste magnam, minus molestias
                  natus nesciunt officia tempora veniam vero. A ab aperiam
                  architecto aut beatae, cum delectus doloribus labore laborum
                  molestias necessitatibus nostrum quidem recusandae rem
                  repudiandae sunt totam vero?
                </p>
              </div>
            </Fade>
          </RoadmapSection>
        </RoadmapBody>
        {children}
      </div>
    </RoadmapStyled>
  )
})
export default Roadmap
