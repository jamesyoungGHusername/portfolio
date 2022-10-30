import React, { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";

const NavContext=createContext();

export const useNavContext = () => useContext(NavContext);

export default function NavContextProvider(props){
    const [currentLocation,setCurrentLocation] = useState(useLocation().pathname.slice(1));

    
    return (
        <NavContext.Provider value={{currentLocation,setCurrentLocation}}>
            {props.children}
        </NavContext.Provider>
    );

}