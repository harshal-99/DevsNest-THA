import './Card.css'

const Card = (props: any) => {
	const deleteCard = (event: any) => {
		console.log(props.key)
	}



	return (
		<div className="Card" onClick={deleteCard}>
			<div className="header">
				<h2>{props.dishName}</h2>
				<button>Delete</button>
			</div>
			<p>you have consumed {props.dishCalorie} cals today</p>
		</div>
	)
}

export default Card