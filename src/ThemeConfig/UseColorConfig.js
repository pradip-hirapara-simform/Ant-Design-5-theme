import {  useEffect,  useState } from "react";
import {  ThemeMode } from "./ThemeColor"; 

function useColorConfig() {
  const [themeColor, setThemeColor] = useState(ThemeMode.Default);
  const [themevalue, setThemevalue] = useState('lightmode');
 
  const handleChange = (value) => { 
    if (value === 'lightmode') {
      setThemeColor(ThemeMode.Default);
      setThemevalue('lightmode');
    }
    if (value === 'darkmode') {
      setThemeColor(ThemeMode.DarkMode);
      setThemevalue('darkmode');
    } 
  };
  useEffect(() => { 
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeColor(ThemeMode.DarkMode);
      setThemevalue('darkmode');
    }
  }, []);
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const ColorScheme = event.matches ? "dark" : "light";
    if (ColorScheme === 'light') {
      setThemeColor(ThemeMode.Default);
      setThemevalue('lightmode');
    }
    if (ColorScheme === 'dark') {
      setThemeColor(ThemeMode.DarkMode);
      setThemevalue('darkmode');
    } 
  });
  /// /* For Scss Variables
  // const root = document.querySelector(':root');
  // const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1])); 
  // const customThemeVar = {
  //   '--primary': ThemeMain.Primary,
  // };  
  // setVariables(customThemeVar); */

  return [handleChange, themeColor, themevalue];
}
export { useColorConfig };
