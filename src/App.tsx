import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import Accordion from "./components/Accordion/Accordion";
import {UnControlledOnOff} from "./components/OnOff/UncontrolleddOnOff";

function App() {
    console.log("App render ")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)

    let [on,setOn] = useState(false)

    let [switchOn,setSwitchOn] = useState<boolean>(false)


    return (
        <div>
            {/*<OnOff on={on} setOn={setOn}/>*/}
            <UnControlledOnOff setSwitchOn={setSwitchOn}/>{switchOn.toString()}
            {/*<UnControlledAccordion titleValue = {'Menu'} />*/}
            {/*<UnControlledAccordion titleValue = {'Users'}/>*/}
            {/*<PageTitle title = {'This is App component'} />*/}
            {/*<PageTitle title = {'My friends'} />*/}
            {/*<UnControlledRating/>*/}
            <Accordion titleValue = {'Menu'} collapsed = {collapsed} setCollapsed={setCollapsed}/>
            <Accordion titleValue = {'Users'}  collapsed = {collapsed} setCollapsed={setCollapsed}/>
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title:string
}
function PageTitle(props: PageTitlePropsType) {
    console.log("AppTittle rendered")
    return <h1> {props.title} </h1>
}

export default App;
