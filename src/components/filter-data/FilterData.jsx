import React, {useState, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './FilterData.scss'

const FilterData = () => {

    const {products, setFilteredProducts} = useContext(GlobalContext)
	const [activeFilter, setActiveFilter] = useState('')

    const compareDesc = (a, b) => {
		if (a.cost > b.cost) {
		  return 1;
		}
		if (a.cost < b.cost) {
		  return -1;
		}
		return 0;
	}

	const compareAsc = (a, b) => {
		if (a.cost < b.cost) {
		  return 1;
		}
		if (a.cost > b.cost) {
		  return -1;
		}
		return 0;
	}

    const clearFilters = () => {
		setActiveFilter('')
		setFilteredProducts(null)

	}

	const filter = ({target:{name}}) => {
		clearFilters()
		if (activeFilter !== name) {
			setActiveFilter(name)
			let filtered = [...products]
			filtered.sort(name === 'lowerPrice' ? compareDesc : compareAsc);
			setFilteredProducts(filtered)
		}
		
	}

    return (
        <div className="filters">
			<span>Sort by:</span>
			<button
				onClick={filter}
				className={activeFilter === 'lowerPrice' ? 'active' : ''}
				name='lowerPrice'
				>Lowest price
            </button>
			<button
				onClick={filter}
				className={activeFilter === 'highestPrice' ? 'active' : ''}
				name='highestPrice'
				>Highest price
            </button>
		</div>
    );
}

export default FilterData