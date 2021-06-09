import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import User from '../../shared/user/User';
import Modal from '../../shared/modal/Modal';
import ItemHistory from '../../item-history/ItemHistory';
import GetCoin from '../../get-coins/GetCoins';
import coin  from '../../../assets/images/coin.svg';

const WidgetAsideBar = () => {
    const {
		user,
		history,
		showBuyModal,
		setShowBuyModal,
		waitingRequest
	} = useContext(GlobalContext)

	const handleClick = () => {
		setShowBuyModal(true)
	}

    return (
        <div className="sidebar">
			<User
				name={user.name}
				width={90}
				border={'#18DBFF'}
				backgroud={'white'}
				// imageURL={'https://semantic-ui.com/images/avatar/small/steve.jpg'}
			/>
			<span className="name">{user.name}</span>
			{user.points && (
				<>
					<div className="points">
						<img src={coin} alt="" />
						<p>{user.points}</p>
					</div>
					<button onClick={handleClick}>Buy More</button>
				</>
			)}
			{history && (
				<>
					<ItemHistory history={history} />
				</>
			)}

			{showBuyModal && (
				<Modal
					show={showBuyModal}
					setShow={setShowBuyModal}
					loading={waitingRequest}
				>
					<GetCoin />
				</Modal>
			)}

			<div></div>
		</div>
    );
}

export default WidgetAsideBar;