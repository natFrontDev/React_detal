import {usersPropsType} from "../../App";
import './Select.css'
import React, {KeyboardEventHandler, useEffect, useState} from "react";


type SelectPropsType ={
    items: usersPropsType[],

}

export const CustomSelect = React.memo(CustomSelectComponent)

function CustomSelectComponent (props: SelectPropsType) {


    let [value, setValue] = useState<string>("2")

    const selectedCity = props.items.find(i => i.value === value)


    const [hovered, setHovered] = useState<string>(value)

    const hoveredCity = props.items.find(i => i.value === hovered)

    useEffect(()=> {setHovered(value)}, [value])

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowDown"||e.key === "ArrowUp") {

        for (let i = 0; i < props.items.length; i++) {
            if (hovered === props.items[i].value) {
                if (e.key === "ArrowDown"){
                if (props.items[i+1]) {
                    setValue(props.items[i + 1].value)
                    return
                }
                }
                if (e.key === "ArrowUp") {
                    if (props.items[i - 1]) {
                        setValue(props.items[i - 1].value)
                        break
                    }
                }
            }
        }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setCollapsed(true)
        }
    }


    const [collapsed, setCollapsed] = useState<boolean>(true)


    return (
        <div className="selector" onBlur={() => setCollapsed(true)}>
            <div className={"selectedCity"}
                 onClick={() => setCollapsed(!collapsed)}>{selectedCity && selectedCity.title} </div>
            {!collapsed &&
                <div className="cityList" onClick={() => setCollapsed(true)}>

                    {props.items.map(i => {
                        return (
                            <div className={"item" + " " + (i === hoveredCity ? "hovered" : "")}
                                 key={i.value}
                                 onKeyUp={onKeyUp}
                                 onMouseEnter={() => {setHovered(i.value)
                                 }}
                                 onClick={() => setValue(i.value)}>
                                {i.title}
                            </div>)
                    })}
                </div>}
        </div>
    )
}
