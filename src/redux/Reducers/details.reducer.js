const initialState = {
    detailsLoad: false, 
    details: {}
}
export const detailsReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'TRYING': 
            return {...state , detailsLoad: true};
        case 'GETDETAILS_SUCCESS':
            return {...state , detailsLoad: false, details:action.payload};
        case 'GETDETIALS_FAIL' :
            return {...state , detailsLoad:false}
        default: return state
    }
}