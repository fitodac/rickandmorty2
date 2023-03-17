import { Link } from 'react-router-dom' 

const Footer = () => (
	<div className="py-5 inset-x-0 bottom-0 absolute">
		<div className="w-full max-w-6xl px-6 mx-auto xl:px-0">
			<div className="grid gap-y-4 md:flex justify-between">
				
				<div className="text-indigo-400 text-sm font-medium leading-none flex gap-5 hover:text-indigo-200">
					<Link to={'/about'}>Sobre esta app</Link>
				</div>

				<div className="text-indigo-700 text-xs leading-none text-right">
					Diseñado por <a href="//fitodac.com" target="_blank" rel="noreferrer" className="underline">@fitodac</a> con ❤️
				</div>

			</div>
		</div>
	</div>
)

export default Footer