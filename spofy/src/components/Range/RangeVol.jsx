import React from "react";
import styles from './Range.module.scss';
const RangeVol = () =>{
    return(
        <input type="range" min="0" max="100" step="1" value="0" className={styles.slider-progress} style="width: 206px;"/> 
    )
}
for (let e of document.querySelectorAll('.slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}
export default RangeVol;