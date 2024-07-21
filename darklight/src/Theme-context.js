import { createContext,useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () =>{
    return useContext(ThemeContext);
}

export const ThemeProvider =({children})=>{
  const [Darkmode , setDarkmode] =useState(false);
  const toggleTheme = () =>{
    setDarkmode(prevState=>!prevState)
  }
  const theme = Darkmode?"dark":"light"
   useEffect(()=>{
     document.documentElement.setAttribute("data-theme",theme)
   },[Darkmode])

  return <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
    </ThemeContext.Provider>
}