import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: ${({theme}) => theme.colors.white};

  .hamburger {
    display: none;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    padding: 0 40px;
  }

  .logo {
    max-width: 167px;
    margin-right: 24px;
    display: block;
    cursor: pointer;

    img {
      width: 100%;
      display: block;
    }
  }

  .logo-wrapper,
  .social {
    flex: 1;
  }

  .header-nav {
    flex: 2;

    .header-nav-inner {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header-nav-list {
      display: flex;

      > li {
        cursor: pointer;
        line-height: 1;
        font-size: ${({ theme }) => theme.font.size.subheading2};
        position: relative;
        font-family: ${({ theme }) => theme.font.secondary};
        color: ${({ theme }) => theme.colors.black};
        letter-spacing: 0.06em;
        font-weight: 400;

        &:after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          height: 2px;
          width: 100%;
          background: transparent;
          transition: 0.3s;
          border-radius: 6px;
        }

        &:hover {
          &:after {
            background: ${({ theme }) => theme.colors.black};
          }
        }

        &:not(:last-child) {
          margin-right: 24px;
        }
      }
    }

    .copyright {
      display: none;
    }
    &::-webkit-scrollbar {
      display: none !important;
    }
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      margin-left: 8px;

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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: auto;
    background-color: ${({ theme }) => theme.colors.black};

    .header-content {
      padding: 0;
    }

    .hamburger {
      margin-left: 8px;
      display: inline-block;
      cursor: pointer;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;
      border: 2px solid ${({ theme }) => theme.colors.white};
    }

    &.open {
      .header-nav {
        height: calc(100% - 72px);
      }
    }
    .social {
      margin-left: auto;
    }

    .header-nav {
      position: fixed;
      top: 72px;
      right: 0;
      bottom: 0;
      left: 0;
      overflow-y: auto;
      z-index: 100;
      height: 0;
      transition: height 0.5s;
      background-color: ${({ theme }) => theme.colors.white};

      .header-nav-inner {
        flex-direction: column;
        align-items: inherit;
        justify-content: space-between;
        height: calc(100vh - 72px);
        padding-top: 40px;
      }

      .header-nav-list {
        flex-direction: column;
        padding: 0 20px;
        align-items: flex-start;

        > li {
          margin-right: 0;
          font-size: ${({ theme }) => theme.font.size.h2};
          width: 100%;
          color: ${({ theme }) => theme.colors.darkText};

          &:not(:first-child) {
            margin-top: 24px;
          }
          &:after {
            content: none;
          }
        }
      }

      .copyright {
        display: block;
        text-align: center;
        padding: 24px 20px;
        font-size: ${({ theme }) => theme.font.size.subheading2};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .header-nav {
      .header-nav-list {
        > li {
          &:not(:first-child) {
            margin-top: 24px;
          }
        }
      }
    }
  }
`;
