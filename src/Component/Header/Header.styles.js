import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import { hexToRGBA } from "../../ThemeConfig/Variables";

export const HeaderStyle = styled(Header)`  
  &.ant-layout-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    padding: 15px 40px;
    background-color: ${(props) => props.theme.WhiteBgColor};
    box-shadow: ${(props) =>
      `0 6px 16px 0 ${hexToRGBA(`${props.theme.BlackBgColor}`, 0.08)}`};
    display: flex;
    align-items:center;
  }
  .logoBlock {
    svg {
      display:block;
      max-width:80px;
      height:auto;
    }
  }
`;

export const MenuStyle = styled(Menu)`
  border: 0px;
  line-height: 30px;
  margin-left: 20px;
`;

export const HeaderRight = styled.div`
  margin-left: auto;
`;
export const HeaderInnerStyle = styled.div`
     display: flex;
    align-items:center; 
`;
