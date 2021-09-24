import axios from 'axios';
const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '05c2352abcmsh681516dbedac55ap1de731jsnaaa5eacd6f75'
    }
}
export const getCoinDetails = () => {
    
    return (dispatch) => {
        dispatch({ type: 'REQUESTING'})
        
        axios.request(options).then((response) => {
            dispatch({
                type: 'GETCOIN_SUCCESS',payload:response
            })
        }).catch((error) => {
            console.error(error);
            dispatch({
                type: 'GETCOIN_FAIL',
            })
        });
    }
}