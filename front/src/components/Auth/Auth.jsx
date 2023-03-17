import { 
	useEffect,
	useContext 
} from 'react'
import localforage from 'localforage'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/context'


const Auth = props => {

	const { updateAuth } = useContext(AppContext)
	const navigate = useNavigate()
	
	useEffect(async () => {
		await localforage.getItem('user').then(resp => {
			if( !resp ) navigate('/login')
			updateAuth(resp)
		})
	}, [])

	return props.children
}

export default Auth