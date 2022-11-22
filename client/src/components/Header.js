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
        <h4 className='displayedHeader'>Guest@JamesMakesApps.com % {displayedHeader}&#9608;</h4>
        <nav>
            <ul>
                <Link className='navLink' to="/"><li style={(header==" ")?{backgroundColor:"rgb(18, 9, 9)",color:"white"}:null} onClick={()=>updateHeader(" ")}>home</li></Link>
                <Link className='navLink' to="/about_me"><li style={(header=="about_me")?{backgroundColor:"rgb(18, 9, 9)",color:"white"}:null} onClick={()=>updateHeader("about_me")}>about_me</li></Link>
                <Link className='navLink' to="/projects"><li style={(header=="projects")?{backgroundColor:"rgb(18, 9, 9)",color:"white"}:null} onClick={()=>updateHeader("projects")}>projects</li></Link>
                <Link className='navLink' to="/contact"><li style={(header=="contact")?{backgroundColor:"rgb(18, 9, 9)",color:"white"}:null} onClick={()=>updateHeader("contact")}>contact</li></Link>
            </ul>
        </nav>
    </header>
    );
}