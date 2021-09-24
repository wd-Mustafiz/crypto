const initialState = {
    loading: false,
    stats:{},
    cryptoCoins: []
}
export const coinReducer = (state = initialState , action) => {
    switch (action.type){
        case 'REQUESTING':
            return {...state , loading: true}
        case 'GETCOIN_SUCCESS':
            return {...state , loading:false , cryptoCoins: action.payload.data.data.coins , stats:action.payload.data?.data?.stats}
            case 'GETCOIN_FAIL':
                return {...state , loading:false ,cryptoCoins:[] }
        default: return state
    }
}