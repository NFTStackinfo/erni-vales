import styled from 'styled-components'

export const ModalStyle = styled.div`
  position: fixed;
  inset: 0;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  overflow: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 1000;
  visibility: visible;
  opacity: 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 16px;
    padding-bottom: 16px;
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
  width: 80%;
  max-height: 778px;
  height: 80vh;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 82.5%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 85%;
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

  >img {
    max-width: 60%;
    width: auto;
  }
`

export const ModalText = styled.div`
  margin-left: 42px;
  width: 100%;

  >div {
    >button {
      background-color: black;
      float: right;
      cursor: pointer;
      border: none;
    }
  }

    > h3 {
      font-family: ${({ theme }) => theme.font.primary};
      font-weight: 900;
      font-size: 48px;
      line-height: 52px;
      margin-top: 90px;
    }

  >p {
    font-size: 22px;
    line-height: 26px;
    margin-top: 10px;
  }
`
