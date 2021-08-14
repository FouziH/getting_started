import {useState} from 'react'

function ButtonClicker() {
//track the value of count 
    // let count =0;
let [count, setCount] = useState(0)

  const onButtonClick =() =>{
      //setcoutn chnages to the value of count
      //and also tells react to re-ender the DOM
     setCount(count + 1)
        console.log("On onButtonClick function 👺 ", count);
  }
    return(
        <>
        <h3>ButtonClicker Component</h3>
        <button onClick={onButtonClick}>Click me!</button>
        {/* This is were we render the count */}
        <h4>Count: {count}</h4>
        </>
    )
}

export default ButtonClicker