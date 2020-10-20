import React, { useState } from 'react'


function TestComponent(props) {
    const handleOnClick = () => props.onClickFunction(props.increment);
return (<button onClick={handleOnClick}>+{props.increment}</button>)
}


//display
function Display(props){
    return(
        <div>{props.message}</div>
    )
}

function ContainerBox(){
    const [counter, setCounter] = useState(0)
    const incrementCouter = (incrementValue) => setCounter(counter + incrementValue)
    return(<div>
        <TestComponent onClickFunction = {incrementCouter} increment = {1}/>
        <TestComponent onClickFunction = {incrementCouter} increment = {5}/>
        <TestComponent onClickFunction = {incrementCouter} increment = {10}/>
        <TestComponent onClickFunction = {incrementCouter} increment = {100}/>
        <Display message = {counter}/>
    </div>)
}

export default ContainerBox;