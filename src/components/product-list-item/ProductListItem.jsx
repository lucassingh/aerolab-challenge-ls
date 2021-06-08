import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import coin from '../../assets/icons/coin.svg';
import cart2 from '../../assets/images/cart2.svg'

function ProductListItem({product}) {

    const { user, setShowModal, setSelectedProduct } = useContext(GlobalContext)
	const hasRequiredCoins = user.points >= product.cost ? true : false
	const coinsLeft = product.cost - user.points

	const handleClick = (product) => {
		setSelectedProduct(product)
		setShowModal(true)
	}

    return (
		<div key={product.id} className="productListItem">
			<div className="cover">
				<div>
					<span>{product.cost}</span>
					<img src={coin} alt="" />
				</div>
				{hasRequiredCoins && (
					<button onClick={() => handleClick(product)}>Redeem now</button>
				)}
			</div>
			<div className="back">
				<img src={product.img.url} alt={product.name} />

				<hr />
				<p>{product.category}</p>
				<h4>{product.name}</h4>
			</div>
			<div>
				{hasRequiredCoins ? (
					<img
						className="badge round"
						src={cart2}
						alt="cart"
					/>
				) : (
					<div className="badge rectangle">
						<span>{`Coins left: ${coinsLeft}`}</span>
						<img src={coin} alt="coin" />
					</div>
				)}
			</div>
		</div>
	)
}

export default ProductListItem;