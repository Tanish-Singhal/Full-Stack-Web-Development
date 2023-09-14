// import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';


let name = "Tanish Singhal";

function App() {
  // another method to pass element in the Item
  const response = {
      itemName: "Sandeep Singhal",
      itemDate: "02",
      itemMonth: "July",
      itemYear: "1980"
  };
  
  return (
    // This is not HTML, this is called JSX.

    // This is called Fragements.
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      
      <div className="container">
        <h1>Hello from {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quod perferendis corrupti dolore iste fuga maxime blanditiis fugiat id maiores ullam in placeat nemo modi repellendus laudantium incidunt accusantium rem! Delectus laborum perferendis quibusdam.</p>
      </div>

      <br /><br />

      <Card>
        {/* If i put the whole content inside a randome card tag, then by default it is not visible
        so i have to use props.children */}
        <Item name = "Neelam Singhal"></Item>
        <ItemDate date = '26' month = 'September' year = '1979'></ItemDate>

        <Item name = {response.itemName}></Item>
        <ItemDate 
          date = {response.itemDate} 
          month = {response.itemMonth} 
          year = {response.itemYear}>
        </ItemDate>
        
        <Item name = {name}></Item>
        <ItemDate date = '20' month = 'October' year = '2006'></ItemDate>
      </Card>
    </>
  );
}

export default App;