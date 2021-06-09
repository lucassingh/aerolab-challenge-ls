import React from 'react';
import coin from '../../assets/images/coin.svg';

const ItemHistory = ({ history }) => {
    return (
		<div className="history">
			<h3>Last swaps</h3>
			{history.map((item, key) => (
				<div className="historyItem" key={key}>
					<img
						className="historyProductImg"
						src={item.img.url}
						alt={item.name}
					/>
					<div>
						<p>{item.name}</p>
						<p>
							{item.cost}{' '}
							<img
								className="historyCoin"
								src={coin}
								alt="coin"
							/>{' '}
						</p>
					</div>
				</div>
			))}
		</div>
    )
}

export default ItemHistory