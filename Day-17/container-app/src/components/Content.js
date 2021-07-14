import Card from "./Card";


const Content = (props) => {
	return(
		<div className="content">
			<Card dishName="Pizza" dishCalorie="56"/>
			<Card dishName="Burger" dishDescription="69"/>
			<Card dishName="Browne" dishDescription="180"/>
			<Card dishName="Fried Rice" dishDescription="500"/>
			<Card dishName="Lassania" dishDescription="200"/>
			<Card dishName="Pani Puri" dishDescription="10"/>
		</div>
	)
}


export default Content