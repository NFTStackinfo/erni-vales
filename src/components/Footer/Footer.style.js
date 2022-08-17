import styled from "styled-components"

export const FooterStyle = styled.footer`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  padding: 25px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: column;
    }
  }

  .copyright {
    font-size: 20px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: 12px;
    }

    li {
      &:not(:first-child) {
        margin-left: 26px;
      }

      a {
        height: 44px;
        width: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`
