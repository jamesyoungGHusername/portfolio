import { useRef } from "react";
import React, { useContext, useEffect, useState } from 'react';
import "./CommitDetail.css";
export const CommitDetail=({commit,show})=>{

    const ref = useRef(null);

    console.log(commit.author.name);

    if(commit.author.name=="jamesyoungGHusername"){
        return(
            <div className="commitCard" style={show?{height:"75px"}:{height:"1px"}}>
                {show?(
                <div className="messageCard">
                 <p>Message: <a className="commitLink" href={`https://www.github.com/${commit.url.split(".com/repos/")[1]}`}>  {commit.message}</a></p>
                </div>
                ):null}
            </div>
        )
    }else{
        return null
    }
    
  }