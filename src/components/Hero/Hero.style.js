import styled from "styled-components";

export const HeroStyle = styled.section`
  padding: 100px 0;
  min-height: 966px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/assets/hero/gradient.png') no-repeat top right;
  background-size: contain;
  position: relative;


  .card {
    position: absolute;
    height: 430px;

    &-1 {
      left: 0;
      bottom: -40px;
    }

    &-2 {
      right: 0;
      top: 25%;
    }
  }

  .text {
    max-width: 800px;
    margin: 14px auto 54px;
  }

  .content {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    background-image: url('/assets/hero/gradient1200.png');

    .card {
      height: 360px;

      &-1 {
        left: -140px;
        bottom: -24px;
      }

      &-2 {
        right: -40px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: url('/assets/hero/gradient992.png');
    min-height: 678px;

    .text {
      margin: 24px auto 38px;
    }

    .card {
      position: absolute;


      &-1 {
        left: -100px;
        bottom: -24px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url('/assets/hero/gradient576.png');
    .card {
      position: absolute;
      height: 280px;


      &-1 {
        bottom: -24px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    //background-image: url('/assets/hero/gradient360.png');
    .card {
      position: absolute;
      height: 200px;


      &-1 {
        left: -60px;
        bottom: -32px;
      }

      &-2 {
        right: -50px;
      }
    }
  }
`;
