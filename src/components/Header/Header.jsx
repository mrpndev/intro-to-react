// rfce will build a functional component with an export

import React from 'react'
import "./header.css"
import Nav from '../Nav'

function Header() {
	return (
		<header>
			<h1>Welcome to React</h1>
			<Nav />
		</header>
	)
}

export default Header
