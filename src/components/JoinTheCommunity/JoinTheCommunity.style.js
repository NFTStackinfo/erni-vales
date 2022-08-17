import styled from "styled-components"

export const JoinTheCommunityStyle = styled.section`
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 80px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  .content {
    background: ${({ theme }) => theme.colors.darkWhite};
    border: 4px solid ${({ theme }) => theme.colors.black};
    border-radius: 30px;
    padding: 40px;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: column-reverse;
      padding: 36px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 24px;
    }
  }
`

export const ImageCarousel = styled.div`
  color: black !important;
  //background-color: green;
  max-width: calc(62% - 54px);
  height: 100%;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: calc(62% - 34px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 36px;
  }

  > div {
    max-width: 100%;
    //background-color: red;

    .slick-slide {
      img {
        display: block;
        max-width: 100%;
        width: 100%;
        height: auto;
      }
    }

    .slick-dots {
      position: absolute;
      bottom: 40px;
      right: 48px;
      width: fit-content;

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        bottom: 24px;
        right: 24px;
      }

      > li {
        width: 12px !important;
        height: 12px !important;
        margin: 0;

        :not(:first-child) {
          margin-left: 20px;
        }

        &.slick-active {
          button {
            opacity: 1;
            transform: scale(1.333);
          }
        }

        button {
          width: 12px !important;
          height: 12px !important;
          background-color: ${({ theme }) => theme.colors.white};
          opacity: 0.6;
          border-radius: 50%;

          ::before {
            content: none;
          }
        }
      }
    }
  }
`

export const TextContent = styled.div`
  max-width: 38%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }

  > h2 {
    text-transform: none;
  }

  > p {
    font-size: 22px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.8);
    margin-top: 14px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 20px;
      line-height: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 18px;
      line-height: 22px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  > a {
    background: ${({ theme }) => theme.colors.black};
    border-radius: 50px;
    height: 56px;
    width: fit-content;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    padding: 15px 55px;
    font-family: ${({ theme }) => theme.font.secondary};
    margin-top: 38px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: 20px;
    }
  }
`
