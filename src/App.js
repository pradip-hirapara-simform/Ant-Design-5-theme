import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { useColorConfig } from "./ThemeConfig/UseColorConfig"; 
import About from "./Pages/About/About";
import GlobalStyle from './Global.style';
import Layout from "./Layout/Layout";
import { antDComponents, antDTheme, customTheme } from "./ThemeConfig/Variables";

function App() {
  const [handleChange, themeColor, themevalue] = useColorConfig();
  return (
    <ConfigProvider
      theme={{
        token: antDTheme(themeColor),
        components: antDComponents(themeColor),
      }}
    >
      <ThemeProvider theme={customTheme(themeColor)}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <Layout themeChange={handleChange} themevalue={themevalue} />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route element={<Layout themeChange={handleChange} />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
