import React from 'react'
import styles from './portfolio.module.css'

const Portfolio = () => {
	return (
		<div className={styles.transparentBox}>
			<div className={styles.card}>
				<h2>Task Manager</h2>
				<p>IMAGE GOES HERE, CLICK FOR MODAL POPUP</p>
			</div>
			<div className={styles.card}>
				<h2>LiveChat</h2>
				<p>IMAGE GOES HERE, CLICK FOR MODAL POPUP</p>
			</div>
			<div className={styles.card}>
				<h2>SAMPLE 3</h2>
				<p>IMAGE GOES HERE, CLICK FOR MODAL POPUP</p>
			</div>
			<div className={styles.card}>
				<h2>SAMPLE 4</h2>
				<p>IMAGE GOES HERE, CLICK FOR MODAL POPUP</p>
			</div>
		</div>
	)
}

export default Portfolio
