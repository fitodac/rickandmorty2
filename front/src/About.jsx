const About = () => (
	<section className="mt-20">
		<div className="w-full max-w-xl px-6 mx-auto xl:px-0">
			<div className="text-indigo-100">
				<h2 className="text-5xl leading-none font-semibold">Rick and Morty</h2>
				<div className="about-content">
					<p>
						Esta applicación web utiliza la tecnología de React en combinación 
						con TailwindCSS y la librería localforage para crear una interfaz de 
						usuario rápida y receptiva, y la API de Rick and Morty para recuperar 
						y mostrar información de la serie en tiempo real.<br/>
					</p>
					
					<p>La aplicación cuenta con varias características como:</p>

					<div className="text-sm leading-tight pl-6 mt-6 flex gap-x-2">
						<span>&middot;</span>
						<span>La posibilidad de buscar personajes, agregarlos de forma aleatoria o agregarlos todos.</span>
					</div>
					<div className="text-sm leading-tight pl-6 mt-3 flex gap-x-2">
						<span>&middot;</span>
						<span>Ver información detallada sobre cada personaje.</span>
					</div>
					<div className="text-sm leading-tight pl-6 mt-3 flex gap-x-2">
						<span>&middot;</span>
						<span>Eliminar personajes de la lista</span>
					</div>
					<div className="text-sm leading-tight pl-6 mt-3 flex gap-x-2">
						<span>&middot;</span>
						<span>Sistema de autenticación de usuario</span>
					</div>
					<div className="text-sm leading-tight pl-6 mt-3 flex gap-x-2">
						<span>&middot;</span>
						<span>Posibilidad de seleccionar personajes como favoritos</span>
					</div>
					<div className="text-sm leading-tight pl-6 mt-3 flex gap-x-2">
						<span>&middot;</span>
						<span>Filtrar entra los personaje favoritos por género y/u ordenarlos de manera ascendento o descendente</span>
					</div>
					
					<p>
						En lo personal fué un gran desafío de programación y un profundo 
						orgullo presentar un producto terminado usando una tecnología que 
						desconocía previamente.
					</p>
					<p>
						Si bien la API cuenta con un vasto número de personajes, ya que se 
						trata de un ejercicio de habilidades de programación, se ha limitado 
						a mostrar un máximo de 20 personajes.
					</p>
					<p>
						Sin duda React estará presente en mis próximos proyectos.
					</p>
					<p>
						- fitodac
					</p>

					<div className="text-sm mt-8">
						fitodac@gmail.com<br/>
						<a href="//fitodac.com" target="_blank" rel="noreferrer">fitodac.com</a>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default About