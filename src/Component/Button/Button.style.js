import { Button } from "antd";
import styled from "styled-components";
import { css } from "styled-components";

export const ButtonStyle = styled(Button)`
  &.ant-btn-icon-only {
    padding: 0 20px;
  }
  /* padding: 20px 50px; */
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.type === "primary" &&
    css`
      color: ${props.theme.secondary};
      &:hover {
        background-color: ${props.theme.primarycolor3};
      }
      &:focus {
        background-color: ${props.theme.primarycolor2};
      }
      &:disabled {
        background-color: ${props.theme.primarycolor3};
        opacity: 0.5;
        border: none;
        color: ${props.theme.secondary};
      }
    `}
  ${(props) =>
    props.type === "default" &&
    css`
      border-color: ${props.theme.primary};
      color: ${props.theme.primary};
      &:hover {
        background-color: ${props.theme.secondary};
        color: ${props.theme.primarycolor3};
        border-color: ${props.theme.primarycolor3};
      }
      &:focus {
        background-color: ${props.theme.secondary};
        color: ${props.theme.primarycolor2};
        border-color: ${props.theme.primarycolor2};
      }
    `}

     ${(props) =>
    props.type === "text" &&
    css`
      color: ${props.theme.primary};
      padding: 0 !important;
      border: none;
      background-color: ${props.theme.secondary};
      &:hover,
      &:active {
        background-color: ${props.theme.secondary};
        color: ${props.theme.primarycolor3};
      }
      &:focus {
        background-color: transparent;
        color: ${props.theme.primarycolor2};
      }
    `}
         ${(props) =>
    props.type === "link" &&
    css`
      color: ${props.theme.primary};
      padding: 0 !important;
      border: none;
      background-color: ${props.theme.secondary};
      text-decoration: underline;
      &:hover,
      &:active {
        background-color: ${props.theme.secondary};
        color: ${props.theme.primarycolor3};
      }
      &:focus {
        background-color: transparent;
        color: ${props.theme.primarycolor2};
      }
    `}
      ${(props) =>
    props.size === "small" &&
    css`
      &.ant-btn-sm {
        padding: 0 16px;
      }
    `}
      ${(props) =>
    props.size === "large" &&
    css`
      &.ant-btn-lg {
        padding: 0 30px;
      }
    `}
`;
