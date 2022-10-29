import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
let navigating = false;
let typing = false;
let typeCount = 1;
export default function Header(props) {

    const [header,setHeader] = useState("about_me");
    const [displayedHeader,setDisplayedHeader] = useState("about_me");
    
    async function updateHeader(text){
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
        <h4>Guest@James_Young_Portfolio % {displayedHeader} &#9608;</h4>
        <nav>
            <ul>
        
                <li onClick={()=>updateHeader("about_me")}><Link to="/">about_me</Link></li>
                <li onClick={()=>updateHeader("projects")}><Link to="/projects">projects</Link></li>
                <li onClick={()=>updateHeader("contact")}><Link to="/contact">contact</Link></li>
                <li onClick={()=>updateHeader("resume")}><a href="../assets/JamesYoungCV.pdf" download>resume</a></li>
            </ul>
        </nav>
    </header>
    );
}