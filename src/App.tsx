import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App render ")
    return (
        <div>
            <PageTitle title = {'This is App component'} />
            <PageTitle title = {'My friends'} />
            <Rating value={3}/>
            <Accordion titleValue = {'Menu'}/>
            <Accordion titleValue = {'Users'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
