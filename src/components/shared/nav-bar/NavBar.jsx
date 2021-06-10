import React, { useContext } from 'react';
import './NavBar.scss';
import './Widget.scss';
import { GlobalContext } from '../../../context/GlobalContext';
import Modal from '../../shared/modal/Modal';
import ItemHistory from '../../item-history/ItemHistory';
import GetCoin from '../../get-coins/GetCoins';
import coin  from '../../../assets/images/coin.svg';
import FilterData from '../../filter-data/FilterData';

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
        <div className="widget">
			
			{user.points && (
				<>  
                    <div className="cont-credit-user">
                        <div className="credit-user">
                            <img className="credit-img" src={coin} alt="" />
                            <p className="credit-text">{user.points}</p>
                        </div>
                        <button className="credit-button" onClick={handleClick}>Buy More</button>
                        <FilterData />
                    </div>
					
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