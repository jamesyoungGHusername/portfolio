import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";
import NavContextProvider, {useNavContext} from "../utils/NavContext";

let navigating = false;
let typing = false;
let typeCount = 1;
export default function Header(props) {
    const {currentLocation,setCurrentLocation} = useNavContext();
    const [header,setHeader] = useState(useNavContext().currentLocation);
    const [displayedHeader,setDisplayedHeader] = useState(useNavContext().currentLocation);
    const location = useLocation();

    async function updateHeader(text){
        setCurrentLocation(text);
        setHeader(text);
    }
    function timeout(delay){
        return new Promise( res => setTimeout(res,delay));
    }
    async function backspaceHeader(){
        if(displayedHeader!=""){
            await timeout(50);
            setDisplayedHeader(displayedHeader.slice(0,-1));
        }
    }
    async function typeHeader(){
        await timeout(50);
        if(header!=displayedHeader){
            setDisplayedHeader(header.slice(0,typeCount))
            typeCount+=1;
        }else{
            typeCount=1;
            typing=false;
        }
    }

    useEffect(()=>{
        if(displayedHeader!="" && navigating){
            backspaceHeader();
        }else if (displayedHeader == ""){
            navigating=false;
            typing=true;
            typeHeader();
        }else if(typing){
            typeHeader();
        }
    },[displayedHeader])

    useEffect(() =>{
        if(header!="" && !navigating){
            navigating=true;
            backspaceHeader();
        }

    },[header])



    return (
    <header>
        <h4>Guest@James_Young_Portfolio % {displayedHeader}&#9608;</h4>
        <nav>
            <ul>
        
                <li onClick={()=>updateHeader("about_me")}><Link to="/about_me">about_me</Link></li>
                <li onClick={()=>updateHeader("projects")}><Link to="/projects">projects</Link></li>
                <li onClick={()=>updateHeader("contact")}><Link to="/contact">contact</Link></li>
            </ul>
        </nav>
    </header>
    );
}