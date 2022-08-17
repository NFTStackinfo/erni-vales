import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition: .2s;

  &.sticky {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
  }

  .hamburger {
    display: none;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
  }

  .logo {
    max-width: 135px;
    margin-right: 24px;
    display: block;
    cursor: pointer;

    img {
      width: 100%;
      display: block;
    }
  }


  .header-nav {

    .nav-bg {
      display: none;
    }

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
        font-size: 16px;
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
          margin-right: 54px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .header-nav {
      .header-nav-list {
        > li {
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: auto;

    .header-content {
      padding: 0;
    }

    .hamburger {
      margin-left: 8px;
      display: inline-block;
      cursor: pointer;
      height: 40px;
      width: 40px;
      transition: 0.3s;
    }

    &.open {
      height: 100vh;
      background: url("assets/header/bg.png") no-repeat right center;
      background-size: cover;

      .header-nav {
        height: calc(100% - 72px);

      }
    }

    .header-nav {
      position: fixed;
      top: 72px;
      right: 0;
      bottom: 0;
      left: 0;
      overflow-y: auto;
      overflow-x: hidden;
      z-index: 100;
      height: 0;

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
          margin-right: 0 !important;
          font-size: 32px;
          width: 100%;
          letter-spacing: -1px;
          color: ${({ theme }) => theme.colors.darkText};

          &:not(:first-child) {
            margin-top: 24px;
          }
          &:after {
            content: none;
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    &.open {
      background-image: url("assets/header/bg576.png");
    }
    .header-nav {
      .header-nav-list {
        > li {
          &:not(:first-child) {
            margin-top: 45px;
          }
        }
      }

    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    &.open {
      background-image: url("assets/header/bg360.png");
    }
    .header-nav {
      .header-nav-list {
        > li {
          font-size: 30px;
        }
      }
    }
  }
`;
