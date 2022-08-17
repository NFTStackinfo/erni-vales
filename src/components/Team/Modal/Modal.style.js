import styled from "styled-components"

export const ModalStyle = styled.div`
  position: fixed;
  inset: 0;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  );
  overflow: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 1000;
  visibility: visible;
  opacity: 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 28px;
    padding-bottom: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-end;
  }

  @keyframes modal-entering {
    from {
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    }
    to {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }
  }

  .mt {
    &-8 {
      margin-top: 32px;
    }
  }

  &.entering {
    animation: modal-entering 0.3s ease-in-out;
  }

  &.entered {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }

  &.exiting {
    animation: modal-entering 0.3s ease-in-out reverse;
  }

  &.exited {
    visibility: visible;
    opacity: 0;
    pointer-events: none;
  }
`

export const ModalContainer = styled.div`
  max-width: 1150px;
  width: 100%;
  max-height: 778px;
  height: 80vh;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 82.5%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 85%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: calc(526px + 28px * 2);
    padding: 0 28px;
    max-height: 542px;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 12px;
    max-height: 642px;
  }
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 40px;
  height: 100%;
  background-image: url("/assets/team/modal/modal-bg.png");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 45% auto;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-size: 40% auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url("/assets/team/modal/modal-bg-md.png");
    background-size: 50% auto;
    //background-position: 150% bottom;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url("/assets/team/modal/modal-bg-sm.png");
    padding: 18px 24px;
  }
`

export const ModalImg = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 30px 0 0 30px;
  height: 100%;
  max-width: 42%;
  width: 42%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }

  > img {
    max-width: 60%;
    width: auto;
  }
`

export const ModalText = styled.div`
  margin-left: 42px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-left: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 0;
  }

  > div {
    > button {
      //background-color: black;
      float: right;
      cursor: pointer;
      border: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        height: 24px;
        width: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        > svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  > h3 {
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: 900;
    font-size: 48px;
    line-height: 52px;
    margin-top: 90px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 6px;
      font-size: 38px;
      line-height: 42px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: 4px;
      font-size: 30px;
      line-height: 34px;
    }
  }

  > p {
    font-size: 22px;
    line-height: 26px;
    margin-top: 10px;
    max-width: 492px;
    width: 100%;
    padding-bottom: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      max-width: 428px;
      font-size: 18px;
      line-height: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      //padding-bottom: 32px;
      padding-bottom: 12px;
    }
  }
`
