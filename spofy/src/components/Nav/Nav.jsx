import React from 'react'
import styles from './Nav.module.scss'
import Logo from './Logo.png'
import { NavLink } from 'react-router-dom'

const Nav = () => {
	return (
		<div className={styles.Nav}>
			<nav>
				<div className={styles.Logo}>
					<img className={styles.Logo__img} src={Logo} />
					<p className={styles.Logo__text}>
						S<span>P</span>O<span>F</span>Y
					</p>
				</div>
				<NavLink
					className={navData =>
						navData.isActive ? styles.active : styles.nav__link
					}
					to='/media'
				>
					<svg
						className={styles.link__img}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-6 h-6'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z'
						/>
					</svg>
					<p className={styles.link__text}>My media</p>
				</NavLink>
				<NavLink
					className={navData =>
						navData.isActive ? styles.active : styles.nav__link
					}
					to='/playlist'
				>
					<svg
						className={styles.link__img}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-6 h-6'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M12 6v12m6-6H6'
						/>
					</svg>
					<p className={styles.link__text}>Create playlist</p>
				</NavLink>
				<NavLink
					className={navData =>
						navData.isActive ? styles.active : styles.nav__link
					}
					to='/favorite'
				>
					<svg
						className={styles.link__img}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-6 h-6'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
						/>
					</svg>
					<p className={styles.link__text}>Favorite tracks</p>
				</NavLink>
			</nav>
			<a className={styles.Download__app}>
				<svg
					className={styles.download__img}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					class='w-6 h-6'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
					/>
				</svg>
				<p className={styles.download__text}>Download app</p>
			</a>
		</div>
	)
}

export default Nav
