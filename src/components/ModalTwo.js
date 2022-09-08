import React from 'react'
import styles from './modalTwo.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const ModalTwo = ({ toggleModalTwo }) => {
	return (
		<div className={styles.modalTwo}>
			<div
				className={styles.overlayTwo}
				onClick={() => toggleModalTwo()}
			></div>
			<div className={styles.modalContentTwo}>
				<Carousel infiniteLoop={true}>
					<div>
						<img src="https://i.imgur.com/2ayWYN3.png" alt="" />
					</div>
					<div>
						<img src="https://i.imgur.com/DGETPy0.png" alt="" />
					</div>
					<div>
						<img src="https://i.imgur.com/SOIwONM.png" alt="" />
					</div>
				</Carousel>
			</div>
		</div>
	)
}

export default ModalTwo
