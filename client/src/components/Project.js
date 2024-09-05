import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";
import "./Project.css";

let navigating = false;
let typing = false;


export default function Project({image,link,name,desc,text,documentation}) {
    const [displayPost,setDisplayPost] = useState(false);
    const [postText,setPostText] = useState(text)
    const [shownPostText,setShownText] = useState("");
    const [typeCount,setTypeCount] = useState(1);

    const [open,setOpen] = useState(false);

    function timeout(delay){
        return new Promise( res => setTimeout(res,delay));
    }

    async function typePost(){
        if(postText){
            await timeout(2);
            if(postText!=shownPostText){
                setShownText(postText.slice(0,typeCount))
                setTypeCount(typeCount+1);
            }else{
                setTypeCount(1);
                typing=false;
            }
        }
    }

    useEffect(()=>{
        if(open){
            typePost();
        }else{
            setShownText("");
            setTypeCount(1);
        }
    },[open]);

    useEffect(()=>{
        if(postText!=shownPostText && open){
            typePost();
        }else{
            setTypeCount(1);
        }       
    },[shownPostText]);
    
    return (
        // <li><a href={link}>   
        <li>     
            <section onClick={()=>setOpen(!open)} className={open ? "blog":"project"}>
                {image && <img style={{borderRadius:20}} className="image" id="first" src={image} alt={`Logo for ${name}`} />}
                <div className="projectDescription">
                    <h1><a href={link}><strong>{name}</strong></a></h1>
                        {documentation ? <Link to={documentation}>Documentation</Link>:<div/>}
                        <p>{desc}</p>
                        {open ? <p>{shownPostText}</p> : <div/>}
                </div>
            </section>
        </li>
    );
}