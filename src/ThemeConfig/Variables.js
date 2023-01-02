// Styled Component Variables
export const customTheme = (themeColor) => ({
  Primary: themeColor.Primary,
  Secondary: themeColor.Secondary,
  WhiteBgColor: themeColor.WhiteBgColor,
  WhiteTextColor: themeColor.WhiteTextColor,
  BlackBgColor: themeColor.BlackBgColor,
  BlackTextColor: themeColor.BlackTextColor,
  GrayBorderColor: themeColor.GrayBorderColor, 
});

// AntDesign global Variables
export const antDTheme = (themeColor) => ({
  colorPrimary: themeColor.Primary,
  colorPrimaryBg: themeColor.Primary,
  colorPrimaryBgHover: themeColor.Secondary,
  controlHeightSX: 30,
  controlHeightSM: 40,
  controlHeightLG: 50,
  fontSize: 16,
  fontFamily: '"Roboto", sans-serif',
  borderRadius: 8,
  colorBgContainer: themeColor.WhiteBgColor,
  colorTextHeading: themeColor.BlackTextColor,
});

//AntDesign Components Variables
export const antDComponents = (themeColor) => ({
  Button: {
    sizeStep: 10,
    controlPaddingHorizontal: 40,
    paddingContentHorizontal: 20,
    controlPaddingHorizontalSM: 20,
    paddingContentVertical: 40,
    colorBorder: themeColor.Primary,
    colorBgTextHover: themeColor.Secondary,
    colorText: themeColor.Primary,
    colorBgTextActive: themeColor.Secondary,
    controlHeight: 40,
    controlHeightSM: 30,
    colorBorderSecondary: themeColor.Secondary,
    colorPrimaryText: themeColor.Primary,
    paddingXS: 20,
  },
  Select: {
    fontWeightStrong: 400,
    colorBorder: themeColor.GrayBorderColor,
    colorTextPlaceholder: themeColor.BlackTextColor,
    colorTextDisabled: themeColor.BlackTextColor,
    colorText: themeColor.BlackTextColor,
    fontSize: 14,
  },
  Card: {
    colorBorderSecondary: themeColor.GrayBorderColor,
  },
  Layout: {
    colorBgHeader: themeColor.WhiteBgColor,
    colorBgBody: themeColor.WhiteBgColor,
  },
  Menu: {
    menuHorizontalHeight: 40,
    colorItemText: themeColor.BlackTextColor,
    colorItemTextHover: themeColor.Primary,
    colorItemBg: themeColor.WhiteBgColor,
    motionDurationSlow:0,
  }
});

// hex to rgba converter 
 export function hexToRGBA(hex, opacity) {
    return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
}
 
// Media Query
export const lg = content => `
@media (max-width: 991px) {
  ${content};
}
`