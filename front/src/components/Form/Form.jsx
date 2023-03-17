import { 
	useState, 
	useEffect,
	useContext 
} from 'react'
import { validate } from './validate'
import localforage from 'localforage'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/context'

import css from './Form.module.css'


const form_model = { user: '', password: '' }


const Form = () => {
	
	const navigate = useNavigate()
	const { updateAuth } = useContext(AppContext)

	const [form, setForm] = useState({ user: 'rick@rickandmortyapp.com', password: 'S0!henry' })
	const [errors, setErrors] = useState({})
	const [display_errors, setDisplayErrors] = useState(false)
	const [access_denied, setAccessDenied] = useState(false)
	const allowed_user = process.env.REACT_APP_USER
  const allowed_pwd = process.env.REACT_APP_PASSWORD

	
	const handleChange = e => {
		setForm({...form, [e.target.name]: e.target.value })
		setErrors(validate({...form, [e.target.name]: e.target.value }))
	}


	const clearErrors = () => {
		setDisplayErrors(false)
		setAccessDenied(false)
	}

	
	const handleSubmit = e => {
		e.preventDefault()

		if( Object.values(errors).length === 0 ){
			const { user, password } = form
			
			if( user === allowed_user && password === allowed_pwd ){
				
				localforage.setItem('user', form.user)
					.then(() => {
						setForm({...form_model})
						setErrors({})
						navigate('/')
					})

			}else{

				setAccessDenied(true)

			}

		} else {
			setDisplayErrors(true)
		}
	}


	useEffect(async () => {
		await localforage.getItem('user').then(resp => {
			if( resp ) navigate('/')
			updateAuth(resp)
		})
	}, [])


	return (
		<>
			<div className="w-full max-w-xs px-6 pt-32 mx-auto xl:px-0">
				<form 
					onSubmit={ handleSubmit } 
					className="w-full grid gap-y-4">
					
					<div className={ css.fieldset }>
						<input
							type="text"
							className={ css.field }
							placeholder="Usuario"
							name="user"
							value={ form.user }
							onChange={ handleChange }
							onKeyUp={ clearErrors }
						/>
						{ display_errors && ( <p className={ css.errors }>{errors.user}</p> ) }
						
					</div>

					<div className={ css.fieldset }>
						<input
							type="password"
							value={ form.password }
							className={ css.field }
							placeholder="Contraseña"
							name="password"
							onChange={ handleChange }
							onKeyUp={ clearErrors }
						/>
						{ display_errors && ( <p className={ css.errors }>{errors.password}</p> ) }
					</div>
					
					<button className={ css.btn }>
						Entrar
					</button>
				</form>

				{access_denied && (
					<div className="bg-red-700 text-white text-sm leading-none py-2 px-5 mt-5 rounded-xl">
						El usuario o la contraseña no son correctos
					</div>
				)}

				<div className="text-white pt-10 grid">
					<div>Usuario: rick@rickandmortyapp.com</div>
					<div>Contraseña: S0!henry</div>
				</div>
			</div>
		</>
	);
}

export default Form