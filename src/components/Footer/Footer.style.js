import styled from "styled-components"

export const FooterStyle = styled.footer`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size.subheading1};
  position: relative;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 0;
  }

  .copyright {
    font-size: ${({ theme }) => theme.font.size.subheading1};
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }

      a {
        background-color: ${({ theme }) => theme.colors.black};
        border-radius: 50%;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icon {
          path {
            transition: 0.3s;
          }
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.white};

          .icon {
            path {
              fill: ${({ theme }) => theme.colors.black} !important;
            }
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .content {
      flex-direction: column;
    }
    .social {
      padding-top: 20px;
    }
    .footer-bottom {
      top: 0;
      display: flex;
      align-items: center;
    }
  }
`
