import React, { 
	useState,
	useContext 
} from 'react'
import { AppContext } from '../../context/context'

import { HiX } from 'react-icons/hi'

import css from './SearchBar.module.css'


export default function SearchBar(props) {
  
	const { addCharacter } = useContext(AppContext)
	const [ input, setInput ] = useState('')
	const [ characters, setCharacters ] = useState(null)


	const searchCharacter = async e => {
		if( input.length < 4 ){
			setCharacters(null)
			return
		}

		await fetch(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
			.then(resp => resp.json())
			.then(data => {
				if( data.erro ){
					setCharacters(null)
				}else{
					setCharacters(data.results)
				}
			})
	}

	const clearSearch = () => {
		setInput('')
		setCharacters(null)
	}


  return (
		<div className={ css['search-wrapper']}>
			<div className={ css.search }>

				<input
					placeholder="Escribe el nombre de un personaje"
					className={ css['search-input'] }
					type="text"
					value={ input }
					onKeyUp={ searchCharacter }
					onChange={(evento) => setInput(evento.target.value)}
				/>

				<button 
					className={ characters ? css['search-btn'] : 'invisible' }
					onClick={ clearSearch }>
					<HiX className="text-2xl leading-none" />
				</button>
			</div>

			{
				characters && (
					<div className={ css['search-results'] }>
						<div className={ css['search-results-list'] }>
							{
								characters.map((c, i) => (
									<div 
										key={c.id} 
										className={ css.item }
										onClick={ () => addCharacter(c) }>
											<img 
												src={ c.image } 
												alt={ c.name }
												className="w-8 h-8 object-cover rounded-full" />
											{ c.name }
									</div>
								))
							}
						</div>
					</div>
				)
			}
		</div>
  )
}
