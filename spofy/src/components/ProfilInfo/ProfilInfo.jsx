import React from 'react'
import s from './ProfilInfo.module.scss'
import h from './buttonHov.module.scss'
import { NavLink } from 'react-router-dom'
const ProfilInfo = () => {
	return (
		<div className={s.ProfilInfo}>
			<div className={s.profilBlock}>
				<h1 className={s.profilHeader}>profile info</h1>
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
				<div className={s.userInfo}>
					<p className={s.userInfoText}>
						USERNAME: <span>Test_Profil</span>
					</p>
					<p className={s.userInfoText}>
						EMAIL: <span>testprofil@gmail.com</span>
					</p>
					<p className={s.userInfoText}>
						PHONE: <span>+38(000) 000 0000</span>
					</p>
					<p className={s.userInfoText}>
						NUMBER CARD: <span>1111111111111111</span>
					</p>
					<p className={s.userInfoText}>
						TARIF: <span>BASIC</span>
					</p>
				</div>
				<NavLink to='/' className={h.butttonExitProfile}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					EXIT PROFILE
				</NavLink>
			</div>
		</div>
	)
}

export default ProfilInfo
