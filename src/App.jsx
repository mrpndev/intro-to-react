// This is .jsx - it's a syntactic sugar over JavaScript & HTML
// used in React components

import { Fragment } from 'react'
import './App.css'
// import your component into parent component
import Header from './components/Header/Header'
import Greet from './components/Greet'
import Counter from './components/Counter'

let fVStore = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];


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
			{/* <p>{JSON.stringify(fVStore)}</p> */}
			{fVStore.map((item, i) => { return <h1 key={i}>{item.name}</h1> })}
			<ul>
				{people.map((item, i) => <li key={i}>{item}</li>)}
			</ul>
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