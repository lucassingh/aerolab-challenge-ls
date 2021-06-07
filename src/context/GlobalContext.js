import React, { useState } from 'react'

export const GlobalContext = React.createContext()

export default function AppProvider({ children }) {
    const [loading, setLoading] = useState(false)
	const [waitingRequest, setWaitingRequest] = useState(false)
	const [error, setError] = useState(null)
	const [user, setUser] = useState({
		username: 'user'
	})
	const [history, setHistory] = useState(null)
	const [section, setSection] = useState('Electronics')
	const [products, setProducts] = useState([])
	const [filteredProducts, setFilteredProducts] = useState(null)
	const [page, setPage] = useState(1)
	const [showModal, setShowModal] = useState(false)
	const [showBuyModal, setShowBuyModal] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [modalType, setModalType] = useState(null)

    return (
		<GlobalContext.Provider
			value={{
				loading,
				setLoading,
				waitingRequest,
				setWaitingRequest,
				error,
				setError,
				user,
				setUser,
				section,
				setSection,
				products,
				setProducts,
				filteredProducts,
				setFilteredProducts,
				page,
				setPage,
				history,
				setHistory,
				showModal,
				setShowModal,
				showBuyModal,
				setShowBuyModal,
				selectedProduct,
				setSelectedProduct,
				modalType,
				setModalType
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}