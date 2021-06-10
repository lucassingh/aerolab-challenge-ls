import React from 'react';
import loader from '../../../assets/images/loader.gif'
import './Loader.scss';

const Loader = () => {
    return (
		<div className="container-loader">
            <img src={loader} alt="" />
		</div>
	)
}

export default Loader;