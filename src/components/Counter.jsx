import React from 'react'

function Counter() {
	let count = 0

	return (
		<div className='counter-container'>
			<button>+</button>
			<span>{count}</span>
			<button>-</button>
		</div>
	)
}

export default Counter