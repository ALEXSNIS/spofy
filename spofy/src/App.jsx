import { Routes, Route } from 'react-router-dom'
import styles from './App.module.scss'
import Player from './components/Player/Player'
import Nav from './components/Nav/Nav'
import Music from './components/Music/Music'
import Header from './components/Header/Header'
import MyMedia from './components/Mymedia/MyMedia'
import ProfileInfo from './components/ProfilInfo/ProfilInfo'
import Tariff from './components/Tarif/Tarif'
import Basic from './components/Tarif/TariffsPlan/Basic'
import Premium from './components/Tarif/TariffsPlan/Premium'
import Student from './components/Tarif/TariffsPlan/Student'
import Favorite from './components/Favorite/Favorite'
function App(props) {
	return (
		<div className={styles.App}>
			<Player />
			<Nav />
			<div className={styles.Routes}>
				<Routes>
					<Route path='/' element={<Music />} />
					<Route path='/media' element={<MyMedia />} />
					<Route path='/profile' element={<ProfileInfo />} />
					<Route path='/tariff' element={<Tariff />} />
					<Route path='/tariff/basic' element={<Basic />} />
					<Route path='/tariff/premium' element={<Premium />} />
					<Route path='/tariff/student' element={<Student />} />
					<Route path='/favorite' element={<Favorite />} />
				</Routes>
			</div>
			<Header />
		</div>
	)
}

export default App
