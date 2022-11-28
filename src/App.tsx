import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    console.log("App render ")
    return (
        <div>
            <OnOff/>
            <UnControlledAccordion titleValue = {'Menu'} />
            <UnControlledAccordion titleValue = {'Users'}/>
            {/*<PageTitle title = {'This is App component'} />*/}
            {/*<PageTitle title = {'My friends'} />*/}
            <UnControlledRating/>
            {/*<Accordion titleValue = {'Menu'} collapsed = {true}/>*/}
            {/*<Accordion titleValue = {'Users'}  collapsed = {false}/>*/}
            {/*<Rating value={0}/>*/}
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
