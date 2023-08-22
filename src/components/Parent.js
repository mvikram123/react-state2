import React,{useState} from "react";
import Child from "./Child";



const Parent=()=>{
    let[inputValue,setInputValue]=useState("")


//    const userType=(e)=>{

//     setInputValue(e.target.value)
//    }

    return(

        <div class="parent">
            <h1>Parent component</h1>
            {inputValue}
            <Child inputValue={inputValue} setInputValue={setInputValue}></Child>

        </div>

    )
}
export default Parent;