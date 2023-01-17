import {ChangeEvent, ChangeEventHandler, useRef, useState} from "react";
import {getValue} from "@testing-library/user-event/dist/utils";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export const UncontrolledInput = ()  => <input/>




export const UncontrolledInputWithTracingValue = () => {
    const  [value, setValue]  = useState("")

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    };

    return <> <input onChange={changeValue}/> current value = {value} </>
}


export const GetValueOfUncontrolledInput= () => {
    const [value, setValue] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    const getValue = () => {
        debugger
        const el = inputRef.current as HTMLInputElement
         setValue(el.value)
    }

    return <> <input ref={inputRef}/> <button onClick={getValue}> Add</button>
        value:{value} </>

//     const  [word, setWord]  = useState("")
//
//
//
//     const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
//         setValue(event.currentTarget.value)
//     };
//
//     const  getValue = () => {
//     setWord(vaue)
//     }
//     return <> <input onChange={changeValue}/> <button onClick={getValue}> Add </button> value = {word} </>
//
}