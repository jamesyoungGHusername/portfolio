import "./Push.css";

import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import React, { useContext, useEffect, useState } from 'react';

import { CommitDetail } from "./CommitDetail";
import { Link } from "react-router-dom";

export const Push=({item})=>{
    const [showCommits,setShowCommits]=useState(false);
    function toggleCommits(){
        setShowCommits(!showCommits);
    }

    function returnOrientation(){
        if(!showCommits && item.payload.commits){
            return ({alignItems:"flex-start"})
        }else{
            return ({alignItems:"center"})
        }
    }
    return(
        <div onClick={toggleCommits}  className="eventCard">
            <div className="dateAndArrow">
                <p className="date">{item.created_at}</p>
                {item.payload.commits &&
                    <>
                        {showCommits ? <FaChevronDown size={30} color={"black"}/> : <FaChevronRight size={30} color={"black"}/>}
                    </>
                }

            </div>

            <div className="eventTitle" style={returnOrientation()}>
                <p className="actionType">{item.type.split("Event")[0]}: {item.repo.name.split("/")[1]}</p>
                <p id="px">Repo: <a className="repoLink" rel="noreferrer" target="_blank" href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a></p>
                <p id="px">Ref: {item.payload?.ref} </p>
            </div>
            {item.payload.commits?(
                <div className="commitContainer">
                    {showCommits?<p>Commit(s)</p>:null}
                    {item.payload.commits.map((commit,index)=>{
                        return <CommitDetail key={index}  commit={commit} show={showCommits}></CommitDetail>
                    })}
                </div>)
            :<div className="commitContainer"/>}
            
        </div>
    )
  }