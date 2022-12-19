import React from 'react'
import styles from './Player.module.scss'
import img from './prelogo.jpg'
const Player = () => {
	return (
		<div className={styles.container}>
			<div className={styles.block__soundInfo}>
				<img className={styles.sound__logo} src={img} />
				<div className={styles.sound__texts}>
					<p className={styles.sound__name}>Bones</p>
					<p className={styles.sound__author}>Imagen Dragon</p>
				</div>
			</div>
			<div className={styles.block__player}>
				<div className={styles.playerTop}>
					<button className={styles.playerTopButtons}>
						<svg
							className={styles.playerSVG}
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-shuffle'
							viewBox='0 0 16 16'
						>
							<path
								fill-rule='evenodd'
								d='M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z'
							/>
							<path d='M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z' />
						</svg>
					</button>
					<button className={styles.playerTopButtons}>
						<svg
							className={styles.playerSVG}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6'
						>
							<path d='M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z' />
						</svg>
					</button>
					<button className={styles.playerTopButtons}>
						<svg
							className={styles.playerSVG}
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
					<button className={styles.playerTopButtons}>
						<svg
							className={styles.playerSVG}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6'
						>
							<path d='M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z' />
						</svg>
					</button>
					<button className={styles.playerTopButtons}>
						<svg
							className={styles.playerSVG}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6'
						>
							<path
								fill-rule='evenodd'
								d='M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z'
								clip-rule='evenodd'
							/>
						</svg>
					</button>
				</div>
				<div className={styles.playerBottom}>
					<p className={styles.playerTimes}>0:00</p>
					<input
						type='range'
						min='0'
						max='100'
						step='1'
						className={styles.RangePlayer}
					/>
					<p className={styles.playerTimes}>2:45</p>
				</div>
			</div>
			<div className={styles.block__settings}>
				<button>
					<svg
						className={styles.settingsSVG}
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
							d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
						/>
					</svg>
				</button>
				<button>
					<svg
						className={styles.settingsSVG}
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
							d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
						/>
					</svg>
				</button>
				<div className={styles.block__volume}>
					<svg
						className={styles.settingsSVG}
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
							d='M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z'
						/>
					</svg>
					<input
						type='range'
						min='0'
						max='100'
						step='1'
						className={styles.RangeVol}
					/>
				</div>
			</div>
		</div>
	)
}

export default Player
