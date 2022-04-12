import { useState ,createContext } from "react";


export const ThemeContext= createContext();



export function ThemeProvider ({children}) {
    const [theme,setTheme] =useState('lightTheme');
    const [textTheme,setTextTheme] =useState('lightText');

    const toggleTheme =()=>{
        setTheme(theme==='darkTheme'? 'lightTheme':'darkTheme')
    }

    const toggleText =()=>{
        setTextTheme(textTheme==='darkText'? 'lightText':'darkText')
    }
   
    const valueTheme = {theme,toggleTheme,textTheme,toggleText}

    return (
        <ThemeContext.Provider value={valueTheme}>
            {children}
        </ThemeContext.Provider>
    )
}