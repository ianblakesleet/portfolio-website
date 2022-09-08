import React, { useState } from 'react'
import styles from './portfolio.module.css'
import ModalOne from './ModalOne'

const Portfolio = () => {
	const [modal, setModal] = useState(false)
	console.log(modal)
	const modalHandler1 = () => {
		setModal(!modal)
	}
	return (
		<>
			<div className={styles.portfolioBox}>
				<div className={styles.portfolioItem}>
					<div className={styles.imgTitle}>
						<h2>LiveChat</h2>
						<img
							src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
							onClick={() => modalHandler1()}
						/>
					</div>
					<div className={styles.description}>
						<p>
							As a student at Devmountain I developed a chatroom
							application as my full-stack project, allowing users
							to create and join chatrooms and communicate
							realtime to one another through text and emojis. The
							chatroom web app features the use of Websockets
							(socket.io), Javascript, React, PostgreSQL, Axios,
							Express, Auth0.
						</p>
					</div>
				</div>
				<div className={styles.portfolioItem}>
					<div className={styles.imgTitle}>
						<h2>TaskManager</h2>
						<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
					</div>
					<div className={styles.description}>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Natus labore velit alias facilis impedit nemo
							molestiae, soluta fugit? Doloremque assumenda iste
							cumque sed dignissimos obcaecati recusandae, neque
							aperiam eum facere. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Consequuntur officia
							adipisci..
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Portfolio
