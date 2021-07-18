import React, {useState} from "react";
import './Counter.css'

const Counter = () => {
	const [count, setCount] = useState(0)

	const clickHandler = (event) => {
		setCount(parseInt(event.target.textContent) + 1)
	}

	return (
		<button onClick={clickHandler}>
			{count}
		</button>
	)
}

export default Counter