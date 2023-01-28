
export type StateType = {
    collapsed:boolean
}
export const TOGGLE_COLLAPSED = "TOGGLE_COLLAPSED"

export type ActionType = {
    type:  typeof TOGGLE_COLLAPSED
}
export const reducer = (state:StateType, action: ActionType):StateType => {
    switch (action.type) {
        case "TOGGLE_COLLAPSED":
            return  {...state,collapsed: !state.collapsed};
        default: throw new Error("Bad action type")
    }

}