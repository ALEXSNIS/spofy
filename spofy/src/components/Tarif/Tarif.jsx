import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Tarif.module.scss'

const Tariff = () => {
	return (
		<div className={s.Tariff}>
			<div className={s.TariffBlock}>
				<div className={s.Tariffs}>
					<h1>Tariffs</h1>
					<NavLink to='/' className={s.buttonExit}>
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
					<div className={s.TariffInfo}>
						<div className={s.BlockPlan}>
							<p className={s.PlanName}>
								BASIC: <span>Free</span>
							</p>
							<NavLink className={s.buttonInfo} to='/tariff/basic'>
								Info
							</NavLink>
						</div>
						<div className={s.BlockPlan}>
							<p className={s.PlanName}>
								PREMIUM: <span>10$</span>
							</p>
							<NavLink className={s.buttonInfo} to='/tariff/premium'>
								Info
							</NavLink>
						</div>
						<div className={s.BlockPlan}>
							<p className={s.PlanName}>
								FOR STUDENT: <span>4$</span>
							</p>
							<NavLink className={s.buttonInfo} to='/tariff/student'>
								Info
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Tariff
