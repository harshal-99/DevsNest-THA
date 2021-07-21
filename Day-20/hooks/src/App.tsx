import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import {v4} from 'uuid'

const foodInfo = [
  {
    dish: "Pizza",
    calorie: 56
  },
  {
    dish: "Burger",
    calorie: 69
  },
  {
    dish: "Browne",
    calorie: 180
  },
  {
    dish: "Fried Rice",
    calorie: 500
  },
  {
    dish: "Lassania",
    calorie: 200
  },
  {
    dish: "Pani Puri",
    calorie: 10
  },
]

foodInfo.forEach((element: any) => {
  element['id'] = v4()
})

function App() {
  return (
    <div className="app">
      <Header text="Calorie Read Only"/>
      <Content foodInfo={foodInfo}/>
    </div>
  )
}

export default App;