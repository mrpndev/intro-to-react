// This is .jsx - it's a syntactic sugar over JavaScript & HTML
// used in React components

import { Fragment } from 'react'
import './App.css'
// import your component into parent component
import Header from './components/Header/Header'
import Greet from './components/Greet'
import Counter from './components/Counter'

// component
function App() {

	return (
		// component can render only ONE element
		// <></> is a Fragment - helps avoid divitis
		<>
			{/* we render using component mounting */}
			<Header />
			<Greet />
			<Counter />
		</>
	)
}

export default App

/* 
	? React Component
	* reusable building block of a React app
	* built using .jsx syntactic sugar
	* has three parts:
		* import statements (bringing files to use)
		* function (the component)
		* export statements

	? Functional Component
	* a type of React component
	* has two pieces to it:
		* component body
			* holds logic
		* return statement
			* render part of the component
			* what shows up on the screen
	* component files and function names are capitalized
		* ex: Nav.jsx function Nav() {}

	? Class Components
	* less commonly used
	* utilize lifecycle methods to interact

	? Component Lifecycle
	* import into another component
	* mount into that component's return
*/