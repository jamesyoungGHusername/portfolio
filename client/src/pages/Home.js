import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";
import NavContextProvider, {useNavContext} from "../utils/NavContext";

import { Push } from '../components/Push';
import "./Home.css";


export default function Home() {

    const [githubData, setGithubData] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [githubUser, setGithubUser] = useState("jamesyoungGHusername");

    useEffect(() => {
        fetchData();
        fetchEvents()
      }, [])
    const fetchData = () => {
    
        return fetch(`https://api.github.com/users/${githubUser}`)
          .then((response) => response.json())
          .then((data) => {
            setGithubData(data);
        });
        
    }
    const fetchEvents = () =>{
        return fetch(`https://api.github.com/users/${githubUser}/events`)
        .then((response) => response.json())
        .then((data) => {
            setEventData(data);
        });
    }

    return(
        <section className="home">
            <img src={githubData.avatar_url} height="100" width="100" />
            <p>{githubData.name}</p>
            <p>Public event history</p>
            {eventData.map((item,index)=>{
                return <Push key={index} item={item}></Push>
            })}

        </section>
    );
}