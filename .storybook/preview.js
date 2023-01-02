// .storybook/preview.tsx
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/Global.style"; 
import { ThemeMode } from "../src/ThemeConfig/ThemeColor";
import {
  antDComponents,
  antDTheme,
  customTheme,
} from "../src/ThemeConfig/Variables";

const withTheme = (StoryFn) => {
  return (
    <ConfigProvider
      theme={{
        token: antDTheme(ThemeMode.Default),
        components: antDComponents(ThemeMode.Default),
      }}
    >
      <ThemeProvider theme={customTheme(ThemeMode.Default)}>
        <GlobalStyle />
        <StoryFn />
      </ThemeProvider>
    </ConfigProvider>
  );
};

// export all decorators that should be globally applied in an array
export const decorators = [withTheme];
