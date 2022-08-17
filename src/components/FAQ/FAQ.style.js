import styled from "styled-components"

export const FAQStyle = styled.section`
  padding: 200px 0 160px;

  .title {
    text-align: center;
    margin-bottom: 48px;
  }

  .Collapsible {
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }

  .Collapsible__trigger {
    display: block;

    &.is-open {
      background-color: ${({ theme }) => theme.colors.white};

      & + .Collapsible__contentOuter {
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .Collapsible__contentInner {
    padding: 0 24px 24px;
    font-size: ${({ theme }) => theme.font.size.subheading1};

    p {
      &:not(:last-child) {
        padding-bottom: 20px;
      }
    }
  }

  .trigger-inner {
    position: relative;
    padding: 24px 130px 24px 24px;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;

    h3 {
      font-weight: 400;
      font-size: ${({ theme }) => theme.font.size.subheading2};
    }
    .icon {
      position: absolute;
      top: 20px;
      right: 24px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 160px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 140px 0;

    .Collapsible__contentInner {
      font-size: ${({ theme }) => theme.font.size.overline};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 140px 0 80px;
  }
`
