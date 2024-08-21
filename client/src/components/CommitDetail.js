import "./CommitDetail.css";

import React, { useContext, useEffect, useState } from 'react';

import { useRef } from "react";

export const CommitDetail=({commit,show})=>{

    const ref = useRef(null);

    if(commit.author.name=="jamesyoungGHusername"){
        return(
            <div className="commitCard" style={show?{height:"75px"}:{height:"1px"}}>
                {show?(
                <div className="messageCard">
                 <p>Message: <a className="commitLink" rel="noreferrer" target="_blank" href={`https://www.github.com/${commit.url.split(".com/repos/")[1]}`}>  {commit.message}</a></p>
                </div>
                ):null}
            </div>
        )
    }else{
        return null
    }
    
  }