import styled from 'styled-components'

export const RoadmapItemStyle = styled.div`
  display: flex;
  gap: 124px;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 28px;
  }

  &.start {
    //margin-bottom: 8px;

    .progress {


      &__bar {
        height: 86px;
        border-radius: 30px 30px 0 0;
        margin-top: 0;
        margin-bottom: -4px;
      }

      &__circle {
        display: none;
      }
    }

    .content {
      padding-bottom: 0;
    }
  }

  &.last {

    .content {
      padding-bottom: 12px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding-bottom: 0;
      }
    }

    .progress {
      &__bar {
        border-radius: 0 0 30px 30px;
      }
    }
  }

  .progress {
    width: 40px;
    height: auto;
    flex-shrink: 0;
    position: relative;

    &__circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      border: 5px solid ${({ theme }) => theme.colors.black};
      position: relative;
      z-index: 3;

      &.active {
        background-color: ${({ theme }) => theme.colors.black};
      }
    }

    &__bar {
      height: calc(100% - 12px - 24px);
      background-color: ${({ theme }) => theme.colors.black};
      //border-radius: 30px;
      width: 8px;
      margin-inline: auto;
      margin-top: -4px;
      position: relative;
      z-index: 1;
    }
  }

  .content {
    height: fit-content;
    color: black;
    padding-bottom: 60px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-bottom: 90px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-bottom: 76px;
    }

    > h4 {
      font-family: ${({ theme }) => theme.font.primary};
      font-weight: 900;
      font-size: 32px;
      line-height: 36px;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 28px;
        line-height: 32px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 26px;
        line-height: 32px;
      }
    }

    .description {
      margin-top: 14px;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 18px;
        line-height: 22px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`
