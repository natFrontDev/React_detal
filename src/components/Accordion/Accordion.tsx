import React from "react";

type AccordionPropsType = {
    titleValue:string
    collapsed: boolean
    setCollapsed:(isCollapsed:boolean)=>void
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title:string
    setCollapsed:(isCollapsed:boolean)=>void
    collapsed:boolean
}
function AccordionTitle (props: AccordionTitlePropsType)  {
    console.log("AccordionTittle rendered")
    return <h3 onClick={()=>props.setCollapsed(!props.collapsed)}> {props.title} </h3>
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;