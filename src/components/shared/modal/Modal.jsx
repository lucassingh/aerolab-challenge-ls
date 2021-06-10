import React from 'react';
import close from '../../../assets/icons/cross.svg';
import './Modal.scss';

const Modal = ({ show, setShow, children, type, loading }) => {

    const className = show ? 'modal-content ' + type : 'modal-hidden'
	const background = show ? 'modal-background' : ''

    const handleClick = () => {
		if (!loading) setShow(!show)
	}

    return (
		<>
			<div className={background}>
				<div className="centered">
					<div className={className}>
						<div onClick={handleClick} className="containerlClose">
                            <img src={close} className="img-modal" />
						</div>
						{children}
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal;