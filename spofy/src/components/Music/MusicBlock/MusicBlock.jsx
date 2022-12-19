import React from "react";
import styles from './MusicBlock.module.scss';
import logo__rock from './logo__rock.jpg';
import logo__pops from './logo__pops.jpg';

const MusicBlock = () =>{
    return(
        <div className={styles.MusicBlock}>
            <div className={styles.text}>
            <h2 className={styles.NameBlock}>Music</h2>
            <a className={styles.BlockALL}>All</a>
            </div>
            <div className={styles.blocks}>
                <div className={styles.playlist}>
                    <img className={styles.playlist__img} src={logo__rock}/>
                    <div className={styles.container}>
                        <div className={styles.container__info}>
                        <h1 className={styles.playlist__name}>Rock-n-Roll</h1>
                        <p className={styles.playlist__actors}>Imagine Dragon</p>
                        </div>
                        <button className={styles.play__button}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.playlist}>
                    <img className={styles.playlist__img} src={logo__pops}/>
                    <div className={styles.container}>
                        <div className={styles.container__info}>
                        <h1 className={styles.playlist__name}>Rap</h1>
                        <p className={styles.playlist__actors}>MORGENSHTERN</p>
                        </div>
                        <button className={styles.play__button}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.playlist}>
                    <img className={styles.playlist__img} src={logo__rock}/>
                    <div className={styles.container}>
                        <div className={styles.container__info}>
                        <h1 className={styles.playlist__name}>Rock-n-Roll</h1>
                        <p className={styles.playlist__actors}>Imagine Dragon</p>
                        </div>
                        <button className={styles.play__button}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.playlist}>
                    <img className={styles.playlist__img} src={logo__pops}/>
                    <div className={styles.container}>
                        <div className={styles.container__info}>
                        <h1 className={styles.playlist__name}>Rap</h1>
                        <p className={styles.playlist__actors}>MORGENSHTERN</p>
                        </div>
                        <button className={styles.play__button}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.playlist}>
                <img className={styles.playlist__img} src={logo__rock}/>
                <div className={styles.container}>
                        <div className={styles.container__info}>
                        <h1 className={styles.playlist__name}>Rock-n-Roll</h1>
                        <p className={styles.playlist__actors}>Imagine Dragon</p>
                        </div>
                        <button className={styles.play__button}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>
                </div>
                
                <div className={styles.playlist}>
                    <img className={styles.playlist__img} src={logo__pops}/>
                    <div className={styles.container}>
                        <div className={styles.container__info}>
                        <h1 className={styles.playlist__name}>Rap</h1>
                        <p className={styles.playlist__actors}>MORGENSHTERN</p>
                        </div>
                        <button className={styles.play__button}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MusicBlock;