import { createGlobalStyle } from 'styled-components'; 
import {  hexToRGBA  } from './ThemeConfig/Variables';
 
const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
   * {
     box-sizing: border-box;
   }
  body {
    margin: 0;
    padding: 0; 
    background-color:  ${props => props.theme.WhiteBgColor}; 
    font-family: "Roboto", sans-serif; 
    color: ${props => props.theme.BlackTextColor};
  }
  .ant-select-dropdown {
    background-color: ${props => props.theme.WhiteBgColor}; 
    box-shadow:  ${props => (`0 6px 16px 0 ${hexToRGBA(`${props.theme.BlackBgColor}`, 0.08)}, 0 3px 6px -4px ${hexToRGBA(`${props.theme.BlackBgColor}`, 0.12)}, 0 9px 28px 8px ${hexToRGBA(`${props.theme.BlackBgColor}`, 0.05)}`)};
    .ant-select-item {
      &.ant-select-item-option-selected {
        color: ${props => props.theme.WhiteTextColor};
      }
    }
  }
`;
 
export default GlobalStyle;