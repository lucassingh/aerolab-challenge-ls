import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import ProductListItem from '../product-list-item/ProductListItem';
import Modal from '../../components/shared/modal/Modal';
import ProductChange from '../product-change/ProductChange';
import './ProductList.scss';

const ProductList = ({ products, page, productsByPage }) => {

    const { showModal, setShowModal, waitingRequest } = useContext(GlobalContext)
	const firstProductShowing = page * productsByPage - productsByPage
	const lastProductShowing = page * productsByPage - 1

    return products ? (
		<>
			<div className="productlist">
				{products.map((product, key) => {
					if (key > firstProductShowing && key < lastProductShowing) {
						return <ProductListItem product={product} key={key} />
					}
					return ''
				})}
			</div>
			{showModal && (
				<Modal show={showModal} setShow={setShowModal} loading={waitingRequest}>
					<ProductChange />
				</Modal>
			)}
		</>
	) : (
		''
	)
}

export default ProductList;