import React from 'react'
import s from './Favorite.module.scss'

const Favorite = () => {
	return (
		<div className={s.Favorite}>
			<header className={s.FavoriteHeader}>
				<div className={s.PlaylistLogo}>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
						<path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
					</svg>
				</div>
				<div className={s.PlaylistInfo}>
					<p className={s.PlaylistText}>Playlist</p>
					<h1 className={s.PlaylistName}>favorite tracks</h1>
					<p className={s.PlaylistText}>Test_Profile • 0 tracks</p>
				</div>
			</header>
			<div className={s.MainBlock}>
				<div className={s.BlockControl}>
					<div className={s.BlockRight}>
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
						<button className={s.DownloadPlaylist}>
							<svg
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
									d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</button>
					</div>
					<div className={s.BlockLeft}>
						<button className={s.Search}>
							<svg
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
									d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
								/>
							</svg>
						</button>
						<p className={s.Sorting}>date added ▼</p>
					</div>
				</div>
				<div className={s.BlockInfo}>
					<div className={s.BlockName}>
						<p className={s.InfoTextNumber}>#</p>
						<p className={s.InfoText}>name</p>
					</div>
					<p className={s.InfoText}>album</p>
					<p className={s.InfoText}>date added</p>
					<p className={s.InfoIMG}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Favorite
