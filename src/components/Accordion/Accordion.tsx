import React from "react";
import {usersPropsType} from "../../App";
import {UnControlledAccordionComponent} from "../UnControlledAccordion/UnControlledAccordion";

type AccordionPropsType = {
    titleValue:string
    collapsed: boolean
    setCollapsed:(isCollapsed:boolean)=>void
    items: usersPropsType[],
    onChange: (value:string)=> void

}

const Accordion = React.memo(AccordionComponent)
function AccordionComponent(props: AccordionPropsType) {
    console.log("Accordion rendered")
    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody onChange={props.onChange} items = {props.items}/>}
    </div>
}

type AccordionTitlePropsType = {
    title:string
    setCollapsed:(isCollapsed:boolean)=>void
    collapsed:boolean

}

const AccordionTitle = React.memo(AccordionTitleComponent)
function AccordionTitleComponent (props: AccordionTitlePropsType)  {
    console.log("AccordionTittle rendered")
    return <h3 onClick={()=>props.setCollapsed(!props.collapsed)}> {props.title} </h3>
}


type AccordionBodyPropsType = {
    items: usersPropsType[],
    onChange: (value:string)=> void

}

const AccordionBody = React.memo(AccordionBodyComponent)
function AccordionBodyComponent(props:AccordionBodyPropsType) {
    console.log("AccordionBody rendered")
    return <ul>
        {props.items.map(i => <li key={i.value} onClick = {()=>props.onChange(i.value)}>{i.title}</li> )}
    </ul>
}

// type AccordionPropsType = {
//     titleValue:string
//     collapsed: boolean
//     setCollapsed:(isCollapsed:boolean)=>void
// }
//
//
// function Accordion(props: AccordionPropsType) {
//     console.log("Accordion rendered")
//     return <div>
//         <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
//         {!props.collapsed && <AccordionBody/>}
//     </div>
// }
//
// type AccordionTitlePropsType = {
//     title:string
//     setCollapsed:(isCollapsed:boolean)=>void
//     collapsed:boolean
// }
// function AccordionTitle (props: AccordionTitlePropsType)  {
//     console.log("AccordionTittle rendered")
//     return <h3 onClick={()=>props.setCollapsed(!props.collapsed)}> {props.title} </h3>
// }
//
// function AccordionBody() {
//     console.log("AccordionBody rendered")
//     return <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// }

export default Accordion;