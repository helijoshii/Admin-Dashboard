import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    chart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C907');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings ] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
      };
    
      const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
      };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });


    return(
        <StateContext.Provider value = {{ activeMenu, setActiveMenu, isClicked, setActiveMenu, handleClick, screenSize, setScreenSize
            ,currentColor,  currentMode, themeSettings, setThemeSettings, setColor, setMode}}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);