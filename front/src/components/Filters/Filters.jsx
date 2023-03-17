import { useContext } from 'react'
import { AppContext } from '../../context/context'

import css from './Filters.module.css'

import {
	HiOutlineSortDescending,
	HiOutlineSortAscending
} from 'react-icons/hi'


const Filters = () => {

	const { 
		filters,
		Filter,
		filterReset
	} = useContext(AppContext)


	const filterByGender = type => Filter({...filters, gender: type})
	const sort = type => Filter({...filters, order: type})

	const clearFilters = () => filterReset()


	return (
		<div className={ css['filter-wrapper']}>
			
			<div className="">
				<div className={ css['filter-title'] }>Género</div>
				<div className={ css['btn-group']}>
					
					<button 
						className={ 
							`${css['filter-btn']} 
							${'Male' === filters.gender ? css.active : ''}` 
						} 
						onClick={ () => filterByGender('Male') }>
						<span className="md:hidden">M</span>
						<span className="hidden md:block">Masculino</span>
					</button>
					
					<button 
						className={ 
							`${css['filter-btn']} 
							${'Female' === filters.gender ? css.active : ''}` 
						}
						onClick={ () => filterByGender('Female') }>
						<span className="md:hidden">F</span>
						<span className="hidden md:block">Femenino</span>
					</button>

					<button 
						className={ 
							`${css['filter-btn']} 
							${'unknow' === filters.gender ? css.active : ''}` 
						}
						onClick={ () => filterByGender('unknow') }>
						<span className="md:hidden">D</span>
						<span className="hidden md:block">Desconocido</span>
					</button>
					
					<button 
						className={ 
							`${css['filter-btn']} 
							${'Genderless' === filters.gender ? css.active : ''}` 
						}
						onClick={ () => filterByGender('Genderless') }>
						<span className="md:hidden">SG</span>
						<span className="hidden md:block">Sin género</span>
					</button>
				</div>
			</div>


			<div className="">
				<div className={ css['filter-title'] }>Orden</div>
				<div className={ css['btn-group']}>
					<button 
						className={ css['filter-btn'] }
						onClick={ () => sort('asc') }>
						<HiOutlineSortAscending /> ASC
					</button>

					<button 
						className={ css['filter-btn'] }
						onClick={ () => sort('desc') }>
						<HiOutlineSortDescending /> DESC
					</button>
				</div>
			</div>


			<div className="">
				<div className={ css['filter-title'] }>&nbsp;</div>
				<button 
					className={ `${css['filter-btn']} w-full` }
					onClick={ () => clearFilters() }>
					Todos
				</button>
			</div>

		</div>
	)
}


export default Filters