 import React, {useState} from "react";

type OnPropsType = {
    on: boolean
    setOn: (isOn:boolean)=>void
}

export const OnOff = (props:OnPropsType) => {


    // let [on,setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor: props.on? "green": "white"
    }

    const offStyle = {
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor: props.on? "white": "red"

    }

    const indicatorStyle = {
        width: "10px",
        height:"10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"5px",
        backgroundColor: props.on? "green": "red"
    }

    return (
        <>
            <div style={onStyle} onClick={()=>{props.setOn(true)}}> On </div>
            <div style={offStyle} onClick={()=>{props.setOn(false)}}> Off </div>
            <div style={indicatorStyle}> </div>
        </>
    )
}

