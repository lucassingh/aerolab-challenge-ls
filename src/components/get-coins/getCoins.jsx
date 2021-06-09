import React , { useContext, useState } from 'react';
import Loader from '../shared/loader/Loader';
import { GlobalContext } from '../../context/GlobalContext';
import { addPointsUser } from '../../load-data/UserData';
import { RANGE, ADD_COINS, REMOVE_COINS } from '../../load-data/ProjectsConst';
import coin  from '../../assets/images/coin.svg';
import cheems from '../../assets/images/cheems.jpeg';
import gif from '../../assets/images/ckeck.gif';

const GetCoins = () =>  {
    const { setShowBuyModal, user, setUser, setWaitingRequest } = useContext(GlobalContext);

    const [loading, setLoading] = useState(false)
	const [badRequest, setBadRequest] = useState(false)
	const [message, setMessage] = useState(null)
	const [coinsToBuy, setCoinsToBuy] = useState(REMOVE_COINS)

    const addCoins = () => {
		if (coinsToBuy + RANGE <= ADD_COINS) {
			setCoinsToBuy(coinsToBuy + RANGE)
		}
	}

    const deleteCoins = () => {
		if (coinsToBuy - RANGE >= REMOVE_COINS) {
			setCoinsToBuy(coinsToBuy - RANGE)
		}
	}

    const handleCancel = () => {
		setBadRequest(false)
		setMessage(null)
		setShowBuyModal(false)
	}

    const handleConfirm = async () => {
		if (coinsToBuy >= REMOVE_COINS) {
			setLoading(true)
			setWaitingRequest(true)
			let res = await addPointsUser(coinsToBuy)
			setMessage(res.message)
			setUser({ ...user, points: res['New Points'] })
			setWaitingRequest(false)
			setLoading(false)
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
					<h3>Buy coins</h3>
					<img
						src={coin}
						alt=""
						className="coin_big"
					/>

					<span>
						<img
							src={coin}
							alt=""
							className="coin"
						/>
						1000 x 1 U$D
					</span>
					{loading ? (
						<Loader />
					) : (
						<>
							<div className="coinsSelector">
								<button
									className={coinsToBuy > REMOVE_COINS ? 'left' : 'left disabled'}
									onClick={deleteCoins}
								>
									-
								</button>
								<div className="number">
									<span>{coinsToBuy}</span>

									<img
										src={coin}
										alt=""
										className="coin"
									/>
								</div>
								<button
									className={
										coinsToBuy < ADD_COINS ? 'right' : 'right disabled'
									}
									onClick={addCoins}
								>
									+
								</button>
							</div>
							<button className="success" onClick={handleConfirm}>
								Confirm
							</button>
							<button className="cancel" onClick={handleCancel}>
								Cancel
							</button>
						</>
					)}
				</>
			)}
		</div>
	)
}

export default GetCoins;