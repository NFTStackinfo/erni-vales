import styled, {keyframes} from "styled-components"


const hithere = keyframes`
  30% { transform: scale(1.2); }
  40%, 60% { transform: rotate(-20deg) scale(1.2); }
  50% { transform: rotate(20deg) scale(1.2); }
  70% { transform: rotate(0deg) scale(1.2); }
  100% { transform: scale(1); }
`

export const BioStyle = styled.section`
  display: flex;
  align-items: center;
  min-height: 1076px;
  position: relative;
  border-bottom: 12px solid ${({theme}) => theme.colors.black};

  .bio-wrapper {
    display: flex;
    width: 57%;
    margin-left: auto;
  }

  .img-wrapper {
    width: 43%;
    height: 100%;
    background-color: rgb(43, 76, 243);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .bio-content-wrapper {
    display: flex;
    flex-direction: column;

    padding: 60px 0 60px 20px;
  }

  .bio-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 36px;
    border-top: 2px solid rgba(0, 0, 0, 0.5);
  }

  .bio-text {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 200px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(253, 250, 255, 0.6) 100%
      );
    }
  }

  .bio-content-inner {
    height: 785px;
    overflow-y: auto;
    padding-bottom: 24px;

    &::-webkit-scrollbar {
      display: none !important;
    }
  }

  .text {
    font-size: 22px;

    &:not(:last-child) {
      padding-bottom: 24px;
    }
  }

  .title {
    margin-bottom: 14px;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 900;
    font-family: ${({ theme }) => theme.font.primary};
    letter-spacing: -1px;
  }
  .see-more {
    height: 50px;
    animation: ${hithere} 1.7s ease infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    h3 {
      font-size: 20px;
    }
    .text {
      font-size: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;

    .text {
      font-size: 18px;
    }

    .img-wrapper {
      width: 100%;
      height: 475px;
      position: static;
    }
    .bio-wrapper {
      width: 100%;
    }
    .bio-content-wrapper {
      padding: 60px 0;
    }
    .bio-footer {
      padding-top: 14px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .bio-footer {
      flex-direction: column;
    }
    h3 {
      font-size: 18px;
      margin-bottom: 8px;
    }
    .img-wrapper {
      height: 360px;
    }
    .bio-content-wrapper {
      padding: 40px 0;
    }
  }
`
