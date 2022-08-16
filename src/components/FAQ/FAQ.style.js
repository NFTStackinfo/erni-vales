import styled from 'styled-components'

export const FAQStyle = styled.section`
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.black};

  .wrapper {
    padding: 124px 0;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-top: 140px;
      padding-bottom: 140px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }


  .content {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: column;
    }
  }

  .title {
    display: flex;
    align-items: center;

    > h2 {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const FAQTopImg = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

export const QuestionsContainer = styled.div`
  max-width: 652px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    margin-top: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 26px;
  }

  .Collapsible {
    //background-color: red;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);

    :not(:first-child) {
      padding: 20px 0;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-top: 16px;
        padding-bottom: 16px;
      }
    }

    :first-child {
      padding-bottom: 20px;


      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-top: 16px;
      }
    }
  }

  .Collapsible__trigger {
    display: block;

    &.is-open {

      & + .Collapsible__contentOuter {
      }
    }
  }

  .Collapsible__contentInner {
    padding-top: 16px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    //background-color: blue;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 18px;
      line-height: 22px;
      padding-top: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 16px;
      line-height: 20px;
      padding-top: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  .trigger-inner {
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
    position: relative;
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 900;
      font-size: 26px;
      line-height: 30px;
      font-family: ${({ theme }) => theme.font.primary};
      //background-color: green;
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 24px;
        line-height: 28px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 22px;
        line-height: 28px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 20px;
        line-height: 24px;
      }
    }

    .icon {
      flex-shrink: 0;
      align-self: center;
      margin-left: 8px;
    }
  }
`
