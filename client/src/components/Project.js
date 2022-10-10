import React from "react";

export default function Project({image,link,name,desc}) {
    return (
        <li><a href={link}>       
            <section className="project">
                {image && <img id="first" src={image} alt="Madaba Match app image."/>}
                <div className="description">
                    <h1><strong>{name}</strong></h1>
                        <p>{desc}</p>
                </div>
            </section>
        </a></li>
    );
}