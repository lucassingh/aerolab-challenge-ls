import React, {useContext} from 'react';
import { PROD_PER_PAGE } from '../../load-data/ProjectsConst'
import { GlobalContext } from '../../context/GlobalContext'
import './Pagination.scss';
import arrowLeft from '../../assets/icons/left-arrow.svg';
import arrowRight from '../../assets/icons/right-arrow.svg' 

const Pagination = () => {
        const {page, setPage, products} = useContext(GlobalContext)
        const firstProduct = 
            page * PROD_PER_PAGE - PROD_PER_PAGE + 1 < products.length - PROD_PER_PAGE - 1
            ? page * PROD_PER_PAGE - PROD_PER_PAGE + 1
            : products.length - PROD_PER_PAGE + 1

    const lastProduct = page * PROD_PER_PAGE > products.length ? products.length : page * PROD_PER_PAGE

    const previuosPage = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }
    
    const nextPage = () => {
        if((page + 1) * PROD_PER_PAGE <= products.length) {
            setPage(page + 1)
        }
    }
    return (
        <div className="pagination">
			<button onClick={previuosPage}>
				<img src={arrowLeft} alt="" />
			</button>
			<p>{`${firstProduct} to ${lastProduct}, of ${products.length} products`}</p>
			<button onClick={nextPage}>
				<img src={arrowRight} alt="" />
			</button>
		</div>
    );
}

export default Pagination