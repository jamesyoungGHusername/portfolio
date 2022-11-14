import React from 'react';
import "./MadabaMatch.css";
import mmVideo from "../assets/Videos/DashPreview.mp4";

export const MadabaMatch = () => {
    // The game revolves around dragging tiles to match groups of four. Fairly straightforward, but beware, as you drag tiles around the board they switch places with the tiles you aren’t touching. Pictured on the left is 50-yard dash. Moving a tile one space counts as a move, you have 50 moves to score as many points as possible.

    //Pictured on the right is the Countdown game mode. Your moves aren’t limited, but picking up and setting down a tile counts as a turn. Each turn all tiles remaining on the board count down by one. If any reach zero you lose the game. If you're not careful, the tiles switching places can mess up your plans… However, if you are careful, you can indirectly influence the board and line up massive combos.

    return (
        <main>
            <h2>
                Madaba Match Beta
            </h2>
            <div className='vidContainer'>
                <video width="750" height="500" controls >
                    <source src={mmVideo} type="video/mp4"/>
                </video>
                <p className='rightText'>The game revolves around dragging tiles to match groups of four. Fairly straightforward, but beware, as you drag tiles around the board they switch places with the tiles you aren't touching. Pictured on the left is 50-yard dash. Moving a tile one space counts as a move, you have 50 moves to score as many points as possible.</p>
            </div>
            <p>This project is being rebuilt in Unity for a cross-platform release. Initally merely a project to get familiar with sprite-kit, it turned into something that I feel has the potential for complex gameplay.</p>
        </main>
    )}