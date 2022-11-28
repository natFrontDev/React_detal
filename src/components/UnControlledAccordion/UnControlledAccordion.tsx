import React, {useState} from "react";

type AccordionPropsType = {
    titleValue:string

}


export function UnControlledAccordion (props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)



    console.log("Accordion rendered")
    return <div>
        <AccordionTitle title={props.titleValue} isCollapsed = {()=>{setCollapsed(!collapsed)}}/>
        {/*<button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}

type AcccordionTitlePropsType = {
    title:string,
    isCollapsed:()=>void
}
function AccordionTitle (props: AcccordionTitlePropsType)  {
    console.log("AccordionTittle rendered")
    return <h1 onClick={props.isCollapsed}> {props.title} </h1>
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

