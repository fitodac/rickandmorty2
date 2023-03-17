import { 
	useEffect,
	useContext, 
	useState 
} from 'react'
import { 
	Link, 
	useNavigate 
} from 'react-router-dom'
import { AppContext } from '../../context/context'
import localforage from 'localforage'
import { 
	HiOutlineTrash,
	HiOutlinePlusCircle,
	HiHeart,
	HiOutlineViewGridAdd
} from 'react-icons/hi'

import SearchBar from '../SearchBar/SearchBar'

import css from './NavBar.module.css'
import ImgLogo from '../../assets/img/logo.webp'


const NavBar = () => {

	const navigate = useNavigate()
	const [fav, setFav] = useState(0)
	
	const { 
		addRandomCharacter,
		loading,
		clearAll,
		auth,
		updateAuth,
		characters,
		updateCharacters,
		toggleFavorites
	} = useContext(AppContext)

	useEffect(() => {
		const favs = characters.filter(e => e.favorite)
		setFav(favs.length)
	}, [characters])


	const logout = () => {

		localforage.removeItem('user')
			.then(() => {
				updateAuth(null)
				navigate('/login')
			})
	}



  return (
		<nav className="py-2 relative z-30">
			<div className="w-full max-w-6xl px-6 mx-auto xl:px-0">
				<div className="grid gap-6 md:flex md:justify-between md:items-center">
					
					<div className="flex justify-center">
						<Link to="/">
							<img 
								src={ ImgLogo } 
								alt="Rick & Morty" 
								className="brand w-32 md:w-48" />
						</Link>
					</div>


				{auth && (
					<div className="grid lg:flex lg:justify-between lg:gap-x-5 lg:justify-end">
						<SearchBar />

						<div className="grid justify-center gap-4 mt-4 lg:m-0 sm:flex">
							<div className="flex gap-x-4">

								<button 
									className={`${css.button} ${loading ? 'active': ''}`} 
									onClick={ addRandomCharacter }
									disabled={ loading }>
										<div className="justify-center items-center gap-2 md:w-28 md:h-5 md:flex">
											<HiOutlinePlusCircle className={ loading ? 'invisible' : 'text-2xl leading-none' } />
											<span className={ loading ? 'hidden' : 'hidden lg:inline-block'}>Personaje</span>
											<span className={ loading ? '' : 'hidden' }>Cargando...</span>
										</div>
								</button>


								<button 
									className={`${css.button} ${loading ? 'active': ''}`} 
									onClick={ () => updateCharacters() }>
									<div className="justify-center items-center gap-2 md:w-20 md:h-5 md:flex">
										<HiOutlineViewGridAdd className="text-2xl leading-none" />
										<span className="hidden lg:block">Todos</span>
									</div>
								</button>


								<button 
									className={ css.button }
									onClick={ clearAll }>
									<HiOutlineTrash className="text-2xl leading-none" />
								</button>
							</div>


							<div className="flex items-center gap-x-4">
								{fav > 0 && (
									<button className={ css['fav-btn']} onClick={() => toggleFavorites()}>
										<span>Favoritos</span>
										<div className="relative">
											<div 
												className={ css['fav-indicator'] }>{ fav }</div>
											<HiHeart className="text-red-700 text-4xl leading-none"/>
										</div>
									</button>
								)}


								<button 
									className="text-white text-opacity-60 px-1 transition-all 
															select-none hover:text-opacity-100"
									onClick={ logout }>
									Salir
								</button>
							</div>

						</div>
					</div>
				)}

				</div>
			</div>
		</nav>
  );
}


export default NavBar