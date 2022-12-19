import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MyMedia.module.scss'
const MyMedia = () => {
	return (
		<div className={s.MediaBlock}>
			<h1 className={s.NameFolder}>Playlist</h1>
			<NavLink className={s.FavoriteBlock} to='/favorite'>
				<div className={s.DivInfo}>
					<div className={s.BlockRight}>
						<h2 className={s.Title}>Favorite tracks</h2>
						<p className={s.BlockRightInfo}>0 favorite tracks</p>
					</div>
					<button className={s.play__button}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6'
						>
							<path
								fill-rule='evenodd'
								d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
								clip-rule='evenodd'
							/>
						</svg>
					</button>
				</div>
			</NavLink>
		</div>
	)
}

export default MyMedia
