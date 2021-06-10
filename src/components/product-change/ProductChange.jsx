import React, { useContext, useState } from 'react';
import Loader from '../shared/loader/Loader';
import { GlobalContext } from '../../context/GlobalContext';
import { getRedeemProduct } from '../../load-data/ProductData';
import { getUserData, getUserHistoryData } from '../../load-data/UserData';
import cheems from'../../assets/images/cheems.jpeg';
import './ProductChange.scss';
import gif from '../../assets/images/ckeck.gif';
import coin from '../../assets/images/coin.svg'

const ProductChange = () => {

    const {
		setShowModal,
		selectedProduct,
		setSelectedProduct,
		setWaitingRequest,
		user,
		setUser,
		setHistory
	} = useContext(GlobalContext)

	const [loading, setLoading] = useState(false)
	const [badRequest, setBadRequest] = useState(false)
	const [message, setMessage] = useState(null)

	const handleCancel = () => {
		setBadRequest(false)
		setMessage(null)
		setSelectedProduct(null)
		setShowModal(false)
	}

    const handleConfirm = async () => {
		if (user.points >= selectedProduct.cost) {
			setLoading(true)
			setWaitingRequest(true)
			const response = await getRedeemProduct(selectedProduct._id)
			setMessage(response.message)
			setSelectedProduct(null)
			setLoading(false)
			setWaitingRequest(false)
			const updatedUser = await getUserData()
			setUser(updatedUser)
			const historyData = await getUserHistoryData()
			setHistory(
				historyData.slice(historyData.length - 8, historyData.length).reverse()
			)
		} else {
			setBadRequest(true)
			setMessage("You don't have enough coins to redeem this product")
		}
	}


    return (
		<div className="confirmSwap">
			{message ? (
				<>
					<h3 className="message">{message}</h3>
					{badRequest ? (
						<img
							src={cheems}
							alt="happy dog"
							className="messageImg"
						/>
					) : (
						<img
							src={gif}
							alt="cheems dog"
							className="messageImg"
						/>
					)}

					<button className="close" onClick={handleCancel}>
						Cerrar
					</button>
				</>
			) : (
				<>
					<h3>Redemption confirmation</h3>
					<img src={selectedProduct.img.url} alt="" />
					<h4>{selectedProduct.name}</h4>
					<span>
						<img
							src={coin}
							alt=""
							className="coin"
						/>
						{selectedProduct.cost}
					</span>
					{loading ? (
						<Loader />
					) : (
						<div className={'flex-column'}>
							<button className="success" onClick={handleConfirm}>
								Confirm
							</button>
							<button className="cancel" onClick={handleCancel}>
								Cancel
							</button>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default ProductChange;