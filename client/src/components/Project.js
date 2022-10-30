import React, {useEffect, useState} from "react";
import "./Project.css";

let navigating = false;
let typing = false;


export default function Project({image,link,name,desc,text}) {
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
            await timeout(10);
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
                {image && <img id="first" src={image} alt="Madaba Match app image."/>}
                <div className="description">
                    <h1><a href={link}><strong>{name}</strong></a></h1>
                        <p>{desc}</p>
                        {open ? <p>{shownPostText}</p> : <div/>}
                </div>
            </section>
        </li>
    );
}