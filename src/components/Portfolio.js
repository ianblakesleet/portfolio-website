import React, { useState } from 'react'
import styles from './portfolio.module.css'
import ModalOne from './ModalOne'
import ModalTwo from './ModalTwo'

const Portfolio = () => {
	const [modal, setModal] = useState(false)
	const [modalTwo, setModalTwo] = useState(false)
	console.log(modal)
	const modalHandler1 = () => {
		setModal(!modal)
	}
	const modalHandler2 = () => {
		setModalTwo(!modalTwo)
	}
	return (
		<>
			<div className={styles.portfolioBox}>
				<div className={styles.portfolioItem}>
					<div className={styles.imgTitle}>
						<h2>LiveChat</h2>
						<img
							src="https://i.imgur.com/1PhfWgM.png"
							onClick={() => modalHandler1()}
						/>
					</div>
					<div className={styles.description}>
						<p>
							For my first project using React, I developed a
							chatroom application as my full-stack project which
							allows users to create and join chatrooms and
							communicate realtime to one another through text and
							emojis. The chatroom web app features the use of
							Websockets (socket.io), Javascript, React,
							PostgreSQL, Axios, Express, Auth0.
						</p>
					</div>
				</div>
				<div className={styles.portfolioItem}>
					<div className={styles.imgTitle}>
						<h2>TaskManager</h2>
						<img
							src="https://i.imgur.com/DGETPy0.png"
							onClick={() => modalHandler2()}
						/>
					</div>
					<div className={styles.description}>
						<p>
							As a student at Devmountain I developed a task
							managing application without a front end framework.
							The app is full CRUD, meaning users can read, add,
							edit, and delete tasks connected to a PostgreSQL
							database. I provided authentication and user
							credentials using Bcrypt to ensure a secure
							authentication. The application uses HTML/CSS,
							JavaScript, Axios, Express, PostgreSQL, Sequelize,
							and Bcrypt.
						</p>
					</div>
				</div>
			</div>
			{modal && <ModalOne toggleModal={modalHandler1} />}
			{modalTwo && <ModalTwo toggleModalTwo={modalHandler2} />}
		</>
	)
}

export default Portfolio
