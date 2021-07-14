import './Card.css'

const Card = (props) => {
	return (
		<div className="Card">
			<h2>{props.dishName}</h2>
			<p>you have consumed {props.dishCalorie} cals today</p>
		</div>
	)
}

export default Card