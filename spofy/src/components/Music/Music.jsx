import React from "react";
import s from './Music.module.scss';
import MusicBlock from "./MusicBlock/MusicBlock"

const Music = () =>{
    return(
        <div className={s.Music}>
            <MusicBlock/>
            <MusicBlock/>
            <MusicBlock/>
            <MusicBlock/>
            
        </div>
    )
}

export default Music;