const initialState = {
   exchagesLoading: false,
    exchanges: []
}
export const exchageReducer = (state = initialState , action) => {
    switch (action.type){
        case 'GETING_EXCHAGEING':
            return {...state , exchagesLoading: true}
        case 'GETING_EXCHAGEING_SUCCESS':
            return {...state , exchagesLoading:false , exchanges: action.payload}
            case 'GETING_EXCHAGEING_FAIL':
                return {...state , exchagesLoading:false ,exchanges:[] }
        default: return state
    }
}