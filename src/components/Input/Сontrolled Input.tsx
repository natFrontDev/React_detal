import React, {ChangeEvent,  useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;


export const ControlledInputComponent = ()  =>  {
    const  [value, setValue]  = useState("")

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    };

    return <input value = {value} onChange={changeValue}/>
}
export const ControlledInput= React.memo(ControlledInputComponent)




export const ControlledCheckboxComponent= ()  =>  {
const  [value, setValue]  = useState<boolean>(true)

const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.checked)
};

return <input type={"checkbox"} checked={value} onChange={changeValue}/>
}
export const ControlledCheckbox= React.memo(ControlledCheckboxComponent)


export const ControlledSelectComponent= ()  =>  {
    const  [value, setValue]  = useState <string | undefined> ("2")

    const changeValue = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.currentTarget.value)
    };

    return <select value={value} onChange={changeValue} >
        <option value={1}> Moscow</option>
        <option value={2}> NewYork</option>
        <option value={3}> Tokyo</option>
        <option value={4}>Ankara</option>
        <option value={5}> London</option>
    </select>
}
export const ControlledSelect= React.memo(ControlledSelectComponent)
