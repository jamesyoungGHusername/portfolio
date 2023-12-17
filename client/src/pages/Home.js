import "./Home.css";

import { BrowserRouter, Link, Route, useLocation } from "react-router-dom";
import NavContextProvider, {useNavContext} from "../utils/NavContext";
import React, { useContext, useEffect, useState } from 'react';

import { Push } from '../components/Push';

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
            <div className='profileContainer'>
                <img src={githubData.avatar_url} height="100" width="100" />
                <div className='nameContainer'>
                    <p className="name">{githubData.name}</p>
                    <p className='desc'>Public event history (<a href="https://github.com/jamesyoungGHusername">/jamesyoungGHusername</a>)</p>
                </div>
                
            </div>
            
            {eventData.length > 0 ? 
                eventData.map((item,index)=>{
                    return <Push key={index} item={item}></Push>
                })
            :
                <div className="dummyCard">
                    <p className="date">{Date()}</p>
                    <div className="eventTitle" style={{alignItems:"flex-start"}}>
                        <p className="actionType">No Public Github History Available...</p>
                    </div>
                    
                </div>
            }


        </section>
    );
}