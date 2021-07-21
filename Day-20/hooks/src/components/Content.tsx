import Card from "./Card";

const Content = (props: any) => {

	let renderContent = <p>No Entry.</p>
	if (props.foodInfo.length > 0) {
		renderContent = props.foodInfo.map((x: any) => {
			return <Card key={x['id']} dishName={x['dish']} dishCalorie={x['calorie']}/>
		})
	}
	return (
		<div className="content">
			{renderContent}
		</div>
	)
}


export default Content