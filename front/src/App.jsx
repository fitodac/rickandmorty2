import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from './context/context'

import './App.css'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'


const filter_obj = { gender: null, order: null }

function App() {
  
	const [ characters, setCharacters ] = useState([])
	const [ favorites, setFavorites ] = useState(false)
	const [ filters, setFilters ] = useState({...filter_obj})
	const [ loading, setLoading ] = useState(false)
	const [ auth, setAuth ] = useState(false)
  const navigate = useNavigate()
	
	const filterReset = () => setFilters({...filter_obj})


	// Get character by ID
	const getCharacter = async id => {
		return await fetch(`${process.env.REACT_APP_API_URL}onsearch/${id}`)
			.then(resp => resp.json())
			.then(data => data)
	}



	// Delete character
	const deleteCharacter = id => {
		const arr = characters.filter(e => e.id !== id)
		document.getElementById(`character-${id}`).classList.add('-translate-y-[30px]', 'opacity-0', 'pointer-events-none')
		setTimeout(() => setCharacters(arr), 510)
	}

	// Add random character
	const addRandomCharacter = async () => {
		navigate('/')
		setLoading(true)
		const id = Math.floor(Math.random() * (Math.floor(1) - Math.ceil(826) + 1) + Math.ceil(826))
		const chars = [...characters]
		
		// Check for existent character
		if( chars.find( e => e.id === id ) ){
			addRandomCharacter()
			return
		}
		
		const char = await getCharacter(id)
		chars.unshift(char)
		setLoading(false)
		setCharacters(chars)
	}


	// Set loading
	const handleLoading = status => setLoading(status)


	// Clear all characters
	const clearAll = () => {
		navigate('/')
		setCharacters([])
	}
	
	
	// Add all characters
	const updateCharacters = async num => {
		clearAll()
		return await fetch(`${process.env.REACT_APP_API_URL}all/`)
			.then(resp => resp.json())
			.then(data => {
				const chars = characters.filter(e => e.favorite)
				const ids = chars.map(e => e.id)
				const resp = data.filter(e => !ids.includes(e.id))
				setCharacters([...chars, ...resp])
			})
	}


	// Add character
	const addCharacter = el => {
		const chars = [...characters]

		// Check for existent character
		if( chars.find( e => e.id === el.id ) ) return

		chars.unshift(el)
		setCharacters(chars)
	}


	// Authorization
	const updateAuth = user => setAuth(user)


	const addFav = id => {
		filterReset()
		const chars = [...characters]
		const idx = chars.findIndex(e => e.id === id)
		chars[idx].favorite = true
		setCharacters(chars)
	}


	const removeFav = id => {
		filterReset()
		const chars = [...characters]
		const idx = chars.findIndex(e => e.id === id)
		delete chars[idx].favorite
		setCharacters(chars)
	}


	const toggleFavorites = () => {
		filterReset()
		setFavorites(!favorites)
	}

	const Filter = obj => setFilters(obj)



  return (
    <>
			<AppContext.Provider 
				value={{
					characters,
					addCharacter,
					updateCharacters,
					deleteCharacter,
					addRandomCharacter,
					loading,
					handleLoading,
					clearAll,
					auth,
					updateAuth,
					addFav,
					removeFav,
					favorites,
					toggleFavorites,
					filters,
					Filter,
					filterReset
				}}>
				<main id="mainWrapper">
					<NavBar />
					<Outlet/>
					<Footer />
				</main>
			</AppContext.Provider>
    </>
  );
}

export default App;
