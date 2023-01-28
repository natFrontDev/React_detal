import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Accordion_reducer";

type AccordionPropsType = {
    titleValue:string

}

export const UnControlledAccordion = React.memo(UnControlledAccordionComponent)
export function UnControlledAccordionComponent (props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false)

    let [collapsed, dispatch] = useReducer(reducer,{collapsed:true})

    console.log("Accordion rendered")
    return <div>
        <AccordionTitle title={props.titleValue} isCollapsed = {()=>{dispatch({type:TOGGLE_COLLAPSED})}}/>
        {!collapsed.collapsed && <AccordionBody/>}
    </div>
}

type AcccordionTitlePropsType = {
    title:string,
    isCollapsed:()=>void
}
const AccordionTitle = React.memo(AccordionTitleComponent)
function AccordionTitleComponent (props: AcccordionTitlePropsType)  {
    console.log("AccordionTittle rendered")
    return (
        <h1 onClick={props.isCollapsed}> {props.title} </h1>
    )
}
const AccordionBody = React.memo(AccordionBodyComponent)
function AccordionBodyComponent() {
    console.log("AccordionBody rendered")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

