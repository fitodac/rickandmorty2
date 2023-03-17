import { createContext } from 'react'

export const AppContext = createContext({
	characters: [],
	addCharacter: () => {},
	updateCharacters: () => {},
	deleteCharacter: () => {},
	addRandomCharacter: () => {},
	loading: false,
	setLoading: () => {},
	clearAll: () => {},
	auth: null,
	setAuth: () => {},
	addFav: () => {},
	removeFav: () => {},
	favorites: false,
	toggleFavorites: () => {},
	filters: {},
	filterCharacters: () => {},
	filterReset: () => {}
})