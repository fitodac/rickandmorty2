import { Link } from 'react-router-dom'

import bg from './assets/img/bg-error-page.webp'

const ErrorPage = () => (
	<div className="bg-indigo-900 w-screen h-screen relative">
		<div className="w-full h-full max-w-lg px-6 mx-auto xl:px-0 relative z-10">
			<div className="text-white grid h-full place-content-center text-center">
				<div 
					className="text-2xl font-bold">
						No me vas a creer, porque casi nunca pasa, pero cometí un error.
				</div>
				<span className="block italic">- Rick</span>

				<div 
					className="mt-10">
						Al parecer es un 404 y debes volver a la <Link to="/" className="font-semibold underline">página de inicio</Link>.
					</div>
			</div>
		</div>

		<div 
			className="bg-no-repeat bg-cover bg-opacity-20 inset-0 absolute opacity-10" 
			style={{backgroundImage: `url(${bg})`}}
		></div>
	</div>
)


export default ErrorPage