import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import Accordion from "./components/Accordion/Accordion";
import {UnControlledOnOff} from "./components/OnOff/UncontrolleddOnOff";
import {
    GetValueOfUncontrolledInput,
    UncontrolledInput,
    UnControlledInputWithTracingValue
} from "./components/Input/Uncontrolled Input";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/Input/Сontrolled Input";
import { CustomSelect } from './components/CustomSelect/Select';





export type usersPropsType = {
    title:string,
    value: string
}


function App() {
    console.log("App render ")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)

    let [on,setOn] = useState(false)

    let [switchOn,setSwitchOn] = useState<boolean>(false)


    const onClick = (value:string) => {
        alert ("users id ${value} is happy")
    }



    const users:usersPropsType[] = [
        {title: "Bankok", value: "2"},
        {title: "Moscow", value: "3"},
        {title: "Ankara", value: "4"},
        {title: "London", value: "5"},
        {title: "Rome", value: "6"}]


    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <OnOff on={on} setOn={setOn}/>
            {/*<UnControlledOnOff setSwitchOn={setSwitchOn}/>{switchOn.toString()}*/}
            {/*<UnControlledAccordion titleValue = {'Menu'} />*/}
            {/*<UnControlledAccordion titleValue = {'Users'}/>*/}
            {/*<PageTitle title = {'This is App component'} />*/}
            {/*<PageTitle title = {'My friends'} />*/}
            {/*<UnControlledRating/>*/}
            <Accordion titleValue={'Menu'}
                       collapsed={collapsed}
                       setCollapsed={setCollapsed}
                       items={users}
                       onChange={(value) => {alert("users id"+ value + " is happy")}}/>

            <Accordion titleValue = {'Users'}
                       collapsed = {collapsed}
                       setCollapsed={setCollapsed}
                       items={users}
                       onChange={(value) => {alert("users id"+ value + " is happy")}}/>
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <CustomSelect items={users} />
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>

            {/*<UncontrolledInput/>*/}
            {/*<UncontrolledInputWithTracingValue/>*/}
            {/*<GetValueOfUncontrolledInput/>*/}
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
