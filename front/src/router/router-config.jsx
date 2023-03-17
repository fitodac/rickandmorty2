import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Cards from '../components/Cards/Cards'
import Detail from '../components/Detail/Detail'
import Form from '../components/Form/Form'
import About from '../About'
import ErrorPage from '../ErrorPage'
import ErrorComponent from '../components/Error/Error'
import Auth from '../components/Auth/Auth'


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ 
				index: true, 
				element: <Auth><Cards /></Auth>
			},
			{
				path: '/rickandmorty',
				element: <Form />
			},
			{
				path: '/about',
				element: <About />,
				errorElement: <ErrorComponent />
			},
			{
				path: '/detail/:id',
				element: <Auth><Detail /></Auth>,
				errorElement: <ErrorComponent />,
			},
			{
				path: '/login',
				element: <Form />,
				errorElement: <ErrorComponent />
			},
		]
	}
])


export default router