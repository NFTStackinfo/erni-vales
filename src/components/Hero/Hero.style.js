import styled from "styled-components"

export const HeroStyle = styled.section`
  padding: 100px 0;

  .hero-model-wrapper {
    img {
      margin-inline: auto;
      max-width: 100%;
    }
  }

  .button-wrapper {
    padding-top: 24px;
  }

  .mint-container {
    margin-block: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
`
