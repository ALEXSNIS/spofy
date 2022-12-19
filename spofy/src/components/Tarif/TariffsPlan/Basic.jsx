import React from 'react'
import s from './TariffsPlan.module.scss'
import h from './buttonChange.module.scss'
import { NavLink } from 'react-router-dom'

const Basic = () => {
	return (
		<div className={s.PlanBlock}>
			<div className={s.BlockInfo}>
				<header className={s.PlanBlockHeader}>
					<NavLink to='/tariff' className={s.BlockHeaderButton}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M15.75 19.5L8.25 12l7.5-7.5'
							/>
						</svg>
					</NavLink>
					<h1 className={s.PlanName}>basic</h1>
					<NavLink to='/' className={s.BlockHeaderButton}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</NavLink>
				</header>
				<div className={s.PlanInfo}>
					<p className={s.PlanInfoText}>
						DOWNLOAD MUSIC: <span>None</span>
					</p>
					<p className={s.PlanInfoText}>
						PHONE LISTENING: <span>Only in app</span>
					</p>
					<p className={s.PlanInfoText}>
						Cost: <span>Free</span>
					</p>
					<p className={s.PlanInfoText}>
						Control in other device: <span>None</span>
					</p>
				</div>
				<NavLink to='/' className={h.ButtonChange}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Change Tariff
				</NavLink>
			</div>
		</div>
	)
}
export default Basic
