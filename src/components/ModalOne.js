import React from 'react'
import styles from './modal.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const Modal = () => {
	return (
		<div className={styles.modal}>
			<div className={styles.overlay}></div>
			<div className={styles.modalContent}>
				<Carousel>
					<div>
						<img
							src="https://images.unsplash.com/photo-1662413915284-d190cfe0f99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1662413915284-d190cfe0f99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1662413915284-d190cfe0f99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</div>
				</Carousel>
			</div>
		</div>
	)
}

export default Modal
