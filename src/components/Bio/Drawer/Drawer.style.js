import styled, { css } from "styled-components"

export const DrawerStyle = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 101;
  top: 0;
  right: 0;
  transform: translateX(100%);
  max-width: 1185px;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.white};
  padding: 30px 44px 0;
  transition: .5s;
  opacity: 0;

  ${({opened}) =>
          opened &&
          css`
            opacity: 1;
            transform: translateX(0);

            &:before {
              position: absolute;
            }
          `}
  .scrollable-content {
    height: 100%;
  }


}

.drawer-header {
  padding-bottom: 16px;
  border-bottom: 6px solid ${({theme}) => theme.colors.orange};
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.title {
  text-transform: uppercase;
  font-family: ${({theme}) => theme.font.secondary};
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 0;
}

.btn-close {
  display: flex;
  cursor: pointer;
  transition: .3s;
  margin-left: 24px;
}

.project-list {
  li {
    padding: 40px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;

    .half {
      width: 50%;
      padding-left: 16px;
      letter-spacing: -1px;

      strong {
        font-weight: 600;
        font-size: 26px;
        position: relative;

        &:not(:empty) {
          &:before {
            content: '';
            position: absolute;
            height: 6px;
            width: 6px;
            border-radius: 50%;
            background-color: ${({theme}) => theme.colors.black};
            top: 14px;
            left: -16px;
          }
        }


      }
      p {
        font-size: 20px;
      }


    }
    .left {
      padding-right: 20px;
    }
  }
}
.drawer-body {
  overflow: auto;
  &::-webkit-scrollbar {
    display: none !important;
  }
}

@media (max-width: ${({theme}) => theme.breakpoints.lg}) {
  .project-list {
    li {
      padding: 20px 0;

      .half {
        strong {
          font-size: 20px;

          &:not(:empty) {
            &:before {
              top: 10px;
              left: -16px;
            }
          }
        }
        p {
          font-size: 18px;
        }
      }
    }

}

@media (max-width: ${({theme}) => theme.breakpoints.md}) {
  padding: 30px 24px 0;

  .title {
    font-size: 20px;
  }

  .project-list {
    li {
      padding: 14px 0;
    }
  }
}

@media (max-width: ${({theme}) => theme.breakpoints.sm}) {
  .title {
    font-size: 16px;
  }
  .project-list {
    li {
      flex-direction: column;
      padding: 0;

      .half {
        padding-top: 14px;
        padding-bottom: 14px;
        width: 100%;
      }

      .left {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
  }

  .btn-close {

    svg {
      width: 24px;
      height: 24px;
    }
  }
}

`

export const DrawerWrapperStyle = styled.div`
  .overlay {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
    ${({ opened }) =>
      opened &&
      css`
        opacity: 1;
        visibility: visible;
      `}
  }
`
