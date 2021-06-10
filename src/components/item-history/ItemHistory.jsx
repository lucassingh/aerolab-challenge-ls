import React from 'react';
import './ItemHistory.scss';
import coin from '../../assets/images/coin.svg';

const ItemHistory = ({ history }) => {
    return (
        <>
            <h3>Your products</h3>
            <div className="container-view">
                {history.map((item, key) => (
                    <div className="viewItem" key={key}>
                        <img
                            className="viewImg"
                            src={item.img.url}
                            alt={item.name}
                        />
                        <div>
                            <p>{item.name}</p>
                            <p>
                                {item.cost}{' '}
                                <img
                                    className="viewCredit"
                                    src={coin}
                                    alt="coin"
                                />{' '}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemHistory