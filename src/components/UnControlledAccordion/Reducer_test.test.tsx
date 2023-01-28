import {reducer, StateType, TOGGLE_COLLAPSED} from "./Accordion_reducer";

test ("Collapsed should be true", ()=> {

    const state:StateType = {
        collapsed:false
    }

    const newState = reducer(state, {type:TOGGLE_COLLAPSED })

    expect(newState.collapsed).toBe(true)

}
)

test ("Collapsed should throw error", ()=> {

        const state:StateType = {
            collapsed:true
        }

        expect(() => { // @ts-ignore
            reducer(state, {type:"FAKE_TYPE" })}).toThrowError()
    }
)