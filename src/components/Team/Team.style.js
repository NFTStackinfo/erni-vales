import styled from "styled-components";

export const TeamStyle = styled.section`
  padding-top: 160px;

  .title {
    padding-bottom: 48px;
    text-align: center;
  }

  .slick-slide {
    padding: 0 12px;
  }

  .team-card {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .img-wrapper {
    margin-bottom: 24px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;

    img {
      display: block;
      width: 100%;
    }
  }

  .name {
    padding-top: 4px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: ${({ theme }) => theme.font.size.subheading2};
    text-transform: uppercase;
    font-weight: 400;

    a {
      color: ${({ theme }) => theme.colors.darkText};
    }
  }

  .position {
    color: ${({ theme }) => theme.colors.lightText};
  }

  .slick-arrow {
    position: absolute;
    top: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    transition: all 0.3s ease 0s;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 72px;
    height: 24px !important;

    svg {
      width: 100%;
      height: 100%;
    }

    &:before {
      content: none;
    }
  }

  .slick-prev {
    left: 50%;
    transform: translateX(calc(-100% - 50px));
  }

  .slick-next {
    right: 50%;
    transform: translateX(calc(100% + 50px));
  }

  .item-number {
    text-align: center;
    padding-top: 60px;
    font-size: ${({ theme }) => theme.font.size.overline};
    color: ${({ theme }) => theme.colors.black};
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .title {
      padding-bottom: 24px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 100px;
    .team-card {
      margin-left: 16px;

      .img-wrapper {
        margin-inline: auto;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .team-card {
      width: calc(100%);
      margin-left: 0;
    }

    .img-wrapper {
      max-width: 100%;
    }
  }
`;
