import React, { useState } from 'react'
import styles from './Range.module.scss'
function rangeFnuc() {
	for (let e of document.querySelectorAll('.slider-progress')) {
		e.style.setProperty('--value', e.value)
		e.style.setProperty('--min', e.min == '' ? '0' : e.min)
		e.style.setProperty('--max', e.max == '' ? '100' : e.max)
		e.addEventListener('input', () => e.style.setProperty('--value', e.value))
	}
}

const RangePlayer = () => {
	return (
		<input
			onChange={rangeFnuc}
			type='range'
			className={styles.sliderProgress}
		/>
	)
}
export default RangePlayer
