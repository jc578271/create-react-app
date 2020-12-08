export default function (state = {}, action: any) {
    return { ...state, userData: action.payload }
}