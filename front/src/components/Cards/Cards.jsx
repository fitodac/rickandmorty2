import React, { 
	useEffect,
	useContext,
	useState 
} from 'react'
import { AppContext } from '../../context/context'

import css from './Cards.module.css'

import loader from '../../assets/img/loader.webp'
import empty from '../../assets/img/empty.webp'
import Card from '../Card/Card'
import Filters from '../Filters/Filters'


const sortASC = (a, b) => {
	if( a.id < b.id) return -1
	if( a.id > b.id) return 1
	return 0
}

const sortDESC = (a, b) => {
	if( a.id > b.id) return -1
	if( a.id < b.id) return 1
	return 0
}



const Cards = () => {

	const { 
		characters, 
		loading,
		favorites,
		filters
	} = useContext(AppContext)

	const [cards, setCards] = useState([])


	useEffect(() => {
		if( favorites ){
			const chars = characters.filter(e => e.favorite) 
			setCards(chars)
		}else{
			setCards(characters)
		}
	}, [favorites, characters])



	useEffect(() => {
		if( !favorites ) return
		let chars = [...characters.filter(e => e.favorite)]
		const { gender, order } = filters

		if( gender ) chars = chars.filter(e => e.gender === gender)
		if( order ){
			if( 'asc' === order ) chars.sort(sortASC)
			if( 'desc' === order ) chars.sort(sortDESC)
		}
		
		setCards(chars)
	}, [filters])





  return (
		<section className="mt-10">
			<div className="w-full max-w-6xl px-6 mx-auto xl:px-0">
				
				{ favorites && <Filters /> }


				{ (cards.length || loading) ? (
					<div 
						className="grid gap-x-4 gap-y-10 justify-center 
												sm:grid-cols-2 
												md:grid-cols-3 
												lg:grid-cols-4 lg:gap-x-6">
						
						{ loading ? (
								<div className="">
									<div 
										className="bg-indigo-800 bg-opacity-30 border 
																border-indigo-800 w-[270px] h-full min-h-[250px] 
																grid place-content-center rounded-xl md:w-auto">
										<img src={ loader } alt="loader" className={ css.loader } />
									</div>
								</div>
							) : ''}

						{ 
							cards.map((c, i) => (
								<div key={ c.id } 
									className={ i % 2 ? 'block' : 'flex justify-end md:block' }>
									<Card character={ c } />
								</div>
							))
						}
					</div>
				) : (
					!favorites ? (
						<div className="pt-24 grid text-center select-none pointer-events-none">
							<img 
								src={ empty } 
								alt="No hay caracteres" 
								className="w-52 mx-auto" />
							<div className={ css['error-title'] }>Vaya!</div>
							<div className={ css['error-info'] }>Parece que no hay personajes por aquí...</div>
							<div className={ css['error-message'] }>
								{ `Puedes buscar uno o hacer click en `}
								<span className="bg-white bg-opacity-20 px-2 pt-0.5 pb-1 font-semibold rounded-full">+ Personaje</span> 
								{` para agregar un nuevo personaje.` }
							</div>
						</div>
					) : (
						<div className="pt-24 grid text-center select-none pointer-events-none">
							<img 
								src={ empty } 
								alt="No hay caracteres" 
								className="w-52 mx-auto" />
							<div className={ css['error-title'] }>Rayos!</div>
							<div className={ css['error-info'] }>No hay personajes que coincidan con tur preferencias de búsqueda</div>
						</div>
					)
				)}
			</div>
		</section>
  );
}



export default Cards