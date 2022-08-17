import styled from "styled-components";

export const AboutStyle = styled.section`
  padding: 80px 0;
  background-color: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};

  .title {
    color: ${({theme}) => theme.colors.white};
    text-align: center;
    margin-bottom: 34px;
  }

  .text {
    margin-top: 34px;
    font-size: 22px;
    text-align: center;

    span {
      color: ${({theme}) => theme.colors.turquoiseBlue};
    }
  }

  .slick-arrow {
    &:before {
      content: none !important;
    }

    path {
      &:nth-child(2) {
        fill: ${({theme}) => theme.colors.black} !important;
      }
    }
  }

  .carousel {
    margin-bottom: 20px;

    .slick-slider {
      margin: 0 12px;
    }

    .slick-slide {
      .img {
        height: 570px;
        width: 100%;
        margin: 0 auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 40px;
        }
      }
    }
  }

  .carousel2 {
    .slick-slide {
      .img {
        height: 136px;
        width: 100%;
        padding: 0 12px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
      }
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.xl}) {
    .carousel-wrapper {
      max-width: 90%;
      margin: 0 auto;
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.lg}) {
    padding: 40px 0;

    .text {
      font-size: 20px;
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    .carousel {

      .slick-slide {
        .img {
          height: 500px;
        }
      }
    }

    .carousel2 {
      .slick-slide {
        .img {
          height: 84px;
          padding: 0 4px;

          img {
            border-radius: 14px;
          }
        }
      }
    }

    .slick-arrow {
      &.slick-prev, &.slick-next {
        height: 40px;
        width: 40px;
      }

      &.slick-next {
        right: -48px;
      }

      &.slick-prev {
        left: -48px;
      }
    }

    .text {
      font-size: 16px;
      margin-top: 20px;
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    .carousel-wrapper {
      max-width: 100%;
    }
    .carousel {
      margin-bottom: 8px;

      .slick-slider {
        margin: 0;
      }

      .slick-slide {
        .img {
          height: 500px;
        }
      }
    }

    .carousel2 {
      .slick-slide {
        .img {
          height: 54px;

          img {
            border-radius: 11px;
          }
        }
      }
    }
    .slick-arrow {

      &.slick-next {
        right: 24px;
      }

      &.slick-prev {
        left: 24px;
      }
    }
  }


`;
