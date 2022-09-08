import React from 'react'
import styles from './modal.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const Modal = ({ toggleModal }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.overlay} onClick={() => toggleModal()}></div>
			<div className={styles.modalContent}>
				<Carousel infiniteLoop={true}>
					<div>
						<img src="https://i.imgur.com/tZIbJcT.png" alt="" />
					</div>
					<div>
						<img src="https://i.imgur.com/JWJqNuS.png" alt="" />
					</div>
					<div>
						<img src="https://i.imgur.com/NTy1XcH.png" alt="" />
					</div>
					<div>
						<img src="https://i.imgur.com/1PhfWgM.png" alt="" />
					</div>
					<div>
						<img src="https://i.imgur.com/SXfMm8b.png" alt="" />
					</div>
					<div>
						<img src="https://i.imgur.com/4HKLpWg.png" alt="" />
					</div>
					<div>
						<img src="https://i.imgur.com/AjHbV1u.png" alt="" />
					</div>
				</Carousel>
			</div>
		</div>
	)
}

export default Modal
