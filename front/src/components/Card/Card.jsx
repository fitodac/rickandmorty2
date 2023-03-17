import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/context'

import { HiHeart, HiOutlineHeart } from 'react-icons/hi'
import icon_human from '../../assets/img/icon-human.webp'
import icon_alien from '../../assets/img/icon-alien.webp'


const Card = props => {
  
	const { character } = props
	const { 
		deleteCharacter,
		addFav,
		removeFav
	} = useContext(AppContext)
	const card_content = useRef()

	const deleteEnter = () => card_content.current.classList.add('opacity-30', 'scale-90')
	const deleteLeave = () => card_content.current.classList.remove('opacity-30', 'scale-90')

	const remove = () => deleteCharacter( character.id )

	
	const addFavorite = async character => {
		return await fetch(`${process.env.REACT_APP_API_URL}fav/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(character)
		})
			.then(resp => resp.json())
			.then(data => addFav(data.id))
	}

	
	const removeFavorite = async id => {
		return await fetch(`${process.env.REACT_APP_API_URL}fav/${id}`, {
			method: 'DELETE'
		})
			.then(resp => resp.json())
			.then(data => removeFav(data.id))
	}

  
	return (
		<div 
			className="w-[270px] transition-all duration-500 relative shadow-2xl
									md:w-auto" 
			id={ `character-${character.id}` }>
			
			<div className="grid gap-2 place-items-center right-2 top-2 absolute">
				<button 
					onClick={ remove }
					className="bg-indigo-900 text-indigo-300 text-2xl leading-none 
										w-7 h-7 rounded-full z-10"
					onMouseEnter={ deleteEnter }
					onMouseLeave={ deleteLeave }>
					&times;
				</button>

				<button className="text-green-400 text-2xl">
					{ 
						character.favorite ? 
							(<HiHeart onClick={ () => removeFavorite(character.id) } />) : 
							(<HiOutlineHeart onClick={ () => addFavorite(character) } />)
					}
				</button>
			</div>

			<Link 
				to={`/detail/${ character.id }`}
				ref={ card_content } 
				className="transition-all duration-500">
				<img 
					src={ character.image } 
					alt={ character.name }
					className="w-full h-48 object-cover object-top rounded-t-xl pointer-events-none" />

				<div 
					className="bg-indigo-900 text-indigo-300 px-6 py-5 relative rounded-b-xl">
					
					<div className="bg-indigo-900 p-2 left-3.5 -top-4 absolute rounded-full pointer-events-none">
						{ 'Human' === character.species ? 
							( <img 
									src={ icon_human } 
									alt="humano" 
									className="w-6" />
								) : 
							( <img 
									src={ icon_alien } 
									alt="alien" 
									className="w-6" /> )
						}
					</div>

					<div className="text-indigo-200 font-semibold whitespace-nowrap text-ellipsis overflow-hidden">{ character.name }</div>
					<div className="text text-xs">{ 'Human' === character.species ? 'Humano' : 'Alien' }</div>

				</div>
			</Link>
		</div>
  );
}

export default Card