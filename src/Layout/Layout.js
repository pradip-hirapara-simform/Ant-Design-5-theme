import Header from "../Component/Header/Header";
import { PageBodyWrapper, PageWrapper } from "./Layout.styles";
import {
    Outlet,
  } from "react-router-dom";

function Layout(props) {
    return (
      <PageWrapper theme="light">
        <Header themeChange={props.themeChange} themevalue={props.themevalue}/>
        <PageBodyWrapper>
            <Outlet />
        </PageBodyWrapper>
      </PageWrapper>
    );
  }

export default Layout