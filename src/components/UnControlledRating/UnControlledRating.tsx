import React, {useState} from "react";
import {Rating} from "../Rating/Rating";


export function UnControlledRating()  {

   // type RatingPropsType =  number
    let [value, setValue] = useState(0)

    const addStars = (id:number)=>{
        setValue(id)
        // value >= 6 && setValue(0)
    }

    console.log("Rating rendered")
    return (
        <div>
            {/*<Star selected = {value > 0}/><button onClick={()=>{setValue(1)}}>1</button>*/}
            {/*<Star selected = {value > 1}/><button onClick={()=>{setValue(2)}}>2</button>*/}
            {/*<Star selected = {value > 2}/><button onClick={()=>{setValue(3)}}>3</button>*/}
            {/*<Star selected = {value > 3}/><button onClick={()=>{setValue(4)}}>4</button>*/}
            {/*<Star selected = {value > 4}/><button onClick={()=>{setValue(5)}}>5</button>*/}
            {/*<button onClick={() => addStars()}>5</button>*/}
            <Star  selected = {value > 0} addStars = {()=>addStars(1)}/>
            <Star  selected = {value > 1} addStars = {()=>addStars(2)}/>
            <Star  selected = {value > 2} addStars = {()=>addStars(3)}/>
            <Star  selected = {value > 3} addStars = {()=>addStars(4)}/>
            <Star  selected = {value > 4} addStars = {()=>addStars(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    addStars: ()=>void
}

function Star(props: StarPropsType) {
    return (
    props.selected?  <span ><b> star </b></span>: <span onClick={props.addStars}> star </span>)

    // if (props.selected) {
    //     return <span><b> star </b></span>
    // } else {
    //     return <span> star </span>
    // }
}