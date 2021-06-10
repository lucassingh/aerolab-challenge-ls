import React, { useContext, useEffect } from 'react'
import './App.scss';
import Pagination from './components/pagination/Pagination';
import FilterData from './components/filter-data/FilterData';
import WidgetAsideBar from './components/shared/nav-bar/NavBar';
import Loader from './components/shared/loader/Loader';
import ProductList from './components/product-list/ProductList';
import { GlobalContext } from './context/GlobalContext';
import { getAllProducts } from './load-data/ProductData';
import { getUserData, getUserHistoryData } from './load-data/UserData';
import { PROD_PER_PAGE } from './load-data/ProjectsConst';
import logo from './assets/icons/aerolab-logo.svg';
import avatar from './assets/images/user.png';
import banner from './assets/images/header-x1.png';

function App() {

    const {
		loading,
		setLoading,
		section,
		products,
		filteredProducts,
		setProducts,
		user,
		setUser,
		page,
		setHistory,
		showModal
	} = useContext(GlobalContext)

    useEffect(() => {
		const getInitialData = async () => {
			const user = await getUserData()
			setUser(user)
			const data = await getAllProducts()
			setProducts(data)
			const historyData = await getUserHistoryData()
			setHistory(historyData.slice(historyData.length - 8, historyData.length).reverse())
			setLoading(false)
		}
		setLoading(true)
		getInitialData()
	}, [setLoading, setProducts, setUser, setHistory])
    
    return (
		<div className={showModal ? "modal-open container" : "container"}>
			<nav className="nav-brand">
				<img src={logo} alt="brand-logo"/>
                <div className="cont-user">
                    <img src={avatar} alt="user"/>
                    <span>{`Hello, ${user.name}!`}</span>
                </div>
			</nav>
			<div className="header-brand">
				<img src={banner} alt="banner" />
				<h1>{section}</h1>
			</div>
			<div className="flex-row">
				{loading ? (
					<Loader />
				) : (
					<>
						<WidgetAsideBar />
						<div className="main">
							<ProductList products={filteredProducts ? filteredProducts : products} productsByPage={PROD_PER_PAGE} page={page}/>
							<Pagination />
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default App;
