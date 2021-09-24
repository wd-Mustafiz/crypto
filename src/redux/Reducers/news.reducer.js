const initalState = {
    newsLoading: false,
    cryptoNews: []
}
export const newsReducer = (state = initalState , action) =>{
    switch (action.type) {
        case 'REQUESTING':
            return {...state , newsLoading: true}
        case 'GETNEWS_SUCCESS':
            return {...state , newsLoading:false , cryptoNews: action.payload}
            case 'GETCOIN_FAIL':
                return {...state , newsLoading:false}
        default: return state
    }
}