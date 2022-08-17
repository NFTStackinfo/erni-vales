import styled from "styled-components"

export const TeamStyle = styled.section`
  background-color: ${({ theme }) => theme.colors.darkWhite};

  h1 {
    font-family: ${({ theme }) => theme.font.primary};
  }
`
