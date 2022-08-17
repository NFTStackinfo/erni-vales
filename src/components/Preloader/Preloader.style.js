import styled from "styled-components";

export const LoaderStyle = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: visible;
  opacity: 1;
  transition: .5s;
  background: url('/assets/preloader/gradient.png') no-repeat center center, #fff;
  background-size: cover;

  font-family: ${({ theme }) => theme.font.secondary};
  &.hide-loader {
    opacity: 0;
    visibility: hidden;
  }

  .content {
    text-align: center;

    img {
      max-width: 130px;
    }
  }


  .percent {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 22px;

    p {
      font-size: 36px;
      width: 64px;
      text-align: center;
    }
  }
  .progress {
    width: 400px;
    height: 18px;
    margin-top: 37px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.black};


    .progress-inner {
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: 50px;
      height: 100%;
      transition: .3s;

      &.box-shadow {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.black};
      }
    }
  }
}
@media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
  background-image: url('/assets/preloader/gradient1200.png');
}
@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
  background-image: url('/assets/preloader/gradient992.png');
}
@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
  background-image: url('/assets/preloader/gradient576.png');
}
@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  background-image: url('/assets/preloader/gradient360.png');
  .progress {
    width: 306px;
  }
}
`;
