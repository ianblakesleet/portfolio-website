import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<div className="icon">
				<NavLink to="/">Home icon</NavLink>
			</div>
			<ul>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/portfolio">Portfolio</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
