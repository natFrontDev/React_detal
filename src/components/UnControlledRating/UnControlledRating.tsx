import React, {useState} from "react";
import {Rating, RatingComponent} from "../Rating/Rating";



export const UnControlledRating= React.memo(UnControlledRatingComponent)
export function UnControlledRatingComponent()  {

   // type RatingPropsType =  number
    let [value, setValue] = useState(0)


    console.log("Rating rendered")
    return (
        <div>
            {/*<Star selected = {value > 0}/><button onClick={()=>{setValue(1)}}>1</button>*/}
            {/*<Star selected = {value > 1}/><button onClick={()=>{setValue(2)}}>2</button>*/}
            {/*<Star selected = {value > 2}/><button onClick={()=>{setValue(3)}}>3</button>*/}
            {/*<Star selected = {value > 3}/><button onClick={()=>{setValue(4)}}>4</button>*/}
            {/*<Star selected = {value > 4}/><button onClick={()=>{setValue(5)}}>5</button>*/}
            {/*<button onClick={() => addStars()}>5</button>*/}
            <Star  selected = {value > 0} setValue = {()=>{setValue(1)}}/>
            <Star  selected = {value > 1}  setValue= {()=>{setValue(2)}}/>
            <Star  selected = {value > 2}  setValue = {()=>{setValue(3)}}/>
            <Star  selected = {value > 3}  setValue = {()=>{setValue(4)}}/>
            <Star  selected = {value > 4}  setValue = {()=>{setValue(5)}}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: (event: React.MouseEvent<HTMLSpanElement>)=>void


}
export const Star= React.memo(StarComponent)
function StarComponent(props: StarPropsType) {
    return <span onClick={(event)=> props.setValue(event)}> {props.selected? <b> star </b>:"star"}</span>

    // if (props.selected) {
    //     return <span><b> star </b></span>
    // } else {
    //     return <span> star </span>
    // }
}