import React from "react";

type AcccordionPropsType = {
    titleValue:string
}

function Accordion(props: AcccordionPropsType) {
    console.log("Accordion rendered")
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
    </div>
}

type AcccordionTitlePropsType = {
    title:string
}
function AccordionTitle (props: AcccordionTitlePropsType)  {
    console.log("AccordionTittle rendered")
    return <h3> {props.title} </h3>
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