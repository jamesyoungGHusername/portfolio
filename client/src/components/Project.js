import React, {useState} from "react";
import "./Project.css";

export default function Project({image,link,name,desc}) {
    const [displayPost,setDisplayPost] = useState(false);
    
    return (
        // <li><a href={link}>   
        <li><a onClick={()=>setDisplayPost(!displayPost)}>     
            <section className="project">
                {image && <img id="first" src={image} alt="Madaba Match app image."/>}
                <div className="description">
                    <h1><strong>{name}</strong></h1>
                        <p>{desc}</p>
                        {displayPost ? <p>test</p> : <div/>}
                </div>
            </section>
        </a></li>
    );
}