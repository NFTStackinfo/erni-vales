import styled from "styled-components"

export const RoadmapStyle = styled.section`
  padding: 126px 0;
  margin-top: 12px;
  background-image: url("/assets/roadmap/left-gradient.png"),
    url("/assets/roadmap/right-gradient.png");
  background-repeat: no-repeat;
  background-position: left center, right center;
  background-size: auto 120%, auto 120%;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    background-position: -60px center, calc(100% + 60px) center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: url("/assets/roadmap/left-gradient.png");
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 100%;

    padding-top: 126px;
    padding-bottom: 126px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 68px;
    padding-bottom: 68px;
    background-image: url("/assets/roadmap/left-gradient-mobile.png"),
      url("/assets/roadmap/right-gradient-mobile.png");
    background-position: left center, right center;
    background-size: auto 150%, auto 150%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 28px;
    padding-bottom: 28px;
  }
`

export const RoadmapContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  > h2 {
    text-transform: capitalize;
  }

  > .roadmap-body {
    max-width: 580px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      max-width: 448px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      max-width: 464px;
      margin-top: 30px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: 38px;
    }

    > .roadmap-item {
      :nth-child(2) {
        .content {
          max-width: 352px;
        }
      }

      :nth-child(3) {
        .content {
          max-width: 312px;
        }
      }

      :nth-child(4) {
        .content {
          max-width: 334px;
        }
      }

      :nth-child(5),
      :nth-child(6) {
        .content {
          max-width: 360px;
        }
      }
    }
  }
`
