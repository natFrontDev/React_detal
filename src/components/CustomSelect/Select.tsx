import {usersPropsType} from "../../App";
import './Select.css'
import {useState} from "react";


type SelectPropsType ={
    items: usersPropsType[],
    selectedCity: string,
    changeCity: (value:string) => void
}



export const CustomSelect = (props: SelectPropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(true)



    return <div className="selector" onBlur={() => setCollapsed(true)}>
        <div  className={"selectedCity"} onClick={() => setCollapsed(!collapsed)}>{props.selectedCity} </div>
        {!collapsed &&
        <div className="cityList" onClick={() => setCollapsed(true)}>
            {props.items.map(i => <div className={"item"} key={i.value}
                                       onClick={() => props.changeCity(i.value)}>
                {i.title}</div>)}
        </div>}
    </div>
}