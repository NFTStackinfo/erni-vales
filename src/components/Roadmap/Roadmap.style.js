import styled from "styled-components"

export const RoadmapBody = styled.div`
  position: relative;
  padding-top: 52px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    width: 8px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.dark};
    z-index: 0;
    border-radius: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &:before {
      left: 70px;
    }
  }
`

export const RoadmapSection = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: row;
  align-items: flex-start;
  width: 100%;
  grid-template-columns: 1fr 1fr;

  & .roadmap__dot {
    left: calc(50% - 17px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 70px 1fr;

    & .roadmap__dot {
      left: 54px;
    }
  }

  & .roadmap__dot {
    display: block;
    position: absolute;
    top: 0;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 4px rgba(68, 81, 81, 0.37);
    z-index: 1;
  }
  &.odd {
    grid-template-areas: "number content";

    & .section-number {
      text-align: right;
      padding-right: 52px;
    }

    & .section-content {
      padding-left: 44px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      & .section-content {
        padding-left: 40px;
      }
      & .section-number {
        text-align: left;
        padding-right: 0;
      }
    }
  }

  &.even {
    grid-template-areas: "content number";

    & .section-number {
      padding-left: 52px;
    }

    & .section-content {
      padding-right: 44px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-areas: "number content";

      & .section-number {
        padding-left: 0;
      }
      & .section-content {
        padding-left: 40px;
        padding-right: 0;
      }
    }
  }

  & .section-number {
    grid-area: number;
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 700;
    font-family: ${({ theme }) => theme.font.secondary};
  }

  & .section-content {
    grid-area: content;
    padding-bottom: 50px;

    h4 {
      font-size: ${({ theme }) => theme.font.size.subheading2};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      font-family: ${({ theme }) => theme.font.secondary};
      font-weight: 700;
    }

    p {
      margin-top: 24px;
      font-size: ${({ theme }) => theme.font.size.subheading1};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      p {
        font-size: ${({ theme }) => theme.font.size.overline};
      }
    }
  }
`

const RoadmapStyled = styled.section`
  padding-top: 160px;

  .title {
    padding-bottom: 48px;
  }

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 120px;
  }
`

export default RoadmapStyled
