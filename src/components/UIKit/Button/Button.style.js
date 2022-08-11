import styled, { css } from "styled-components";

export const ButtonStyle = styled.a`
  height: 62px;
  padding: 0 24px;
  color: ${({ theme }) => theme.colors.black};
  transition: 0.3s;
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.h4};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  border-radius: 30px;

  .icon {
    margin-right: 12px;
    path {
      transition: 0.3s;
    }
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryLight};
      }
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.black};

      &:hover {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};

        .icon {
          path {
            fill: ${({ theme }) => theme.colors.white} !important;
          }
        }
      }
    `}



  &.fade-in-button {
    opacity: 1;
    visibility: visible;
  }
`;
