 import React, {useState} from "react";
 import {OnOffComponent} from "./OnOff";


type OnOffPropsType ={
    setSwitchOn:(on:boolean)=>void
}

export const UnControlledOnOffComponent= (props:OnOffPropsType) => {

    let [on,setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor: on? "green": "white"

    }

    const offStyle = {
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor: on? "white": "red"

    }

    const indicatorStyle = {
        width: "10px",
        height:"10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"5px",
        backgroundColor:on? "green": "red"
    }

    const onClicked=()=>{
        {setOn(true); props.setSwitchOn (true)}
    }
    const offClicked=()=>{
        {setOn(false); props.setSwitchOn (false)}
    }

    return (
        <>
            <div style={onStyle} onClick={onClicked}> On </div>
            <div style={offStyle} onClick={offClicked}> Off </div>
            <div style={indicatorStyle}> </div>.
        </>
    )
}

 export const UnControlledOnOff= React.memo(UnControlledOnOffComponent)

