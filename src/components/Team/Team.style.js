import styled from "styled-components"

export const TeamStyle = styled.section`
  background-color: ${({ theme }) => theme.colors.darkWhite};
  border-top: 12px solid ${({ theme }) => theme.colors.turquoiseBlue};
  border-bottom: 12px solid ${({ theme }) => theme.colors.turquoiseBlue};

  .container {
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 0;
    }
  }

  .content {
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: column;
    }
  }

  .title {
    max-width: 310px;
    padding-top: 116px;
    padding-bottom: 116px;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 28px 24px 18px;
      max-width: 100%;
      width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding-bottom: 26px;
      justify-content: center;
    }

    > h2 {
      text-transform: capitalize;

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        > br {
          display: none;
        }
      }
    }
  }
`

export const TeamList = styled.div`
  padding-top: 116px;
  padding-bottom: 116px;
  padding-left: 84px;
  margin-left: 84px;
  display: grid;
  justify-content: space-between;
  grid-template-areas:
    "img-1 img-2 img-3"
    "name-1 name-2 name-3"
    "see-more-1 see-more-2 see-more-3";
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: 38px;
    margin-left: 38px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 0;
    padding: 42px 24px 28px;
    border-left: none;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-areas:
      "img-1"
      "name-1"
      "see-more-1"
      "img-2"
      "name-2"
      "see-more-2"
      "img-3"
      "name-3"
      "see-more-3";

    justify-content: center;
    padding-top: 60px;
  }

  .img-wrapper,
  .name,
  .link {
    justify-self: center;
  }

  .img-wrapper {
    max-height: 100px;
    align-self: center;

    &-1 {
      grid-area: img-1;
    }

    &-2 {
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 60px;
      }

      grid-area: img-2;
      max-width: 204px;

      img {
        width: 100%;
      }
    }

    &-3 {
      max-width: 130px;

      img {
        width: 100%;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 60px;
      }

      grid-area: img-3;
    }
  }

  .name {
    color: rgba(0, 0, 0, 0.6);
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    margin-top: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 26px;
    }

    &-1 {
      grid-area: name-1;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 16px;
      }
    }

    &-2 {
      grid-area: name-2;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 32px;
      }
    }

    &-3 {
      grid-area: name-3;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 16px;
      }
    }
  }

  .see-more {
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 8px;
    }

    &-1 {
      grid-area: see-more-1;
    }

    &-2 {
      grid-area: see-more-2;
    }

    &-3 {
      grid-area: see-more-3;
    }
  }
`
