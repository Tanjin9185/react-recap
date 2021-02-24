import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data));
  }, [])

  //  const nayoks =['jasim', 'tuhin', 'BappaRaz']
  return (
    
    <div className="App">
      <div>
      <MovieCounter></MovieCounter>
    </div>
      {/* <Nayok name="salman" age="67"></Nayok>
      <Nayok name={nayok[0]}></Nayok>
      <Nayok name={nayok[1]}></Nayok>
      <Nayok name={nayok[2]}></Nayok> */}
      {
        nayoks.map(na => <Nayok name={na.name}></Nayok>)
      }
      
    </div>
  );
}

function Nayok(props) {
  const nayokStyle = {
    color: "red",
    border: "1px solid black",
  };
  // const {name} = props;
    console.log(props)
  return (
    <div style={nayokStyle}>
      <h1>hero {props.name}</h1>
      <p>I have done 5 movies in {30} years.</p>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(5);
  
  return (
    <div>
      <button onClick={() => count >=0 && setCount(count+1)}>Add Movie</button>
      <button onClick={() => count >0 && setCount(count-1)}>Remove</button>
      <h3>Number of Movies : {count}</h3>
      <MovieDisplay movie={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movie I have acted : {props.movie}</h4>
}

export default App;
