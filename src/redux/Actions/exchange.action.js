import axios from 'axios'
export const getExchanges = () => {
    return async (dispatch) => {
        dispatch({type: 'GETING_EXCHAGEING'})
        
        try {
            const options = {
                method: 'GET',
                url: `https://coinranking1.p.rapidapi.com/exchanges`,
                headers: {
                  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                  'x-rapidapi-key': '05c2352abcmsh681516dbedac55ap1de731jsnaaa5eacd6f75'
                }
              };
            const response = await axios.request(options)
            dispatch({type:'GETING_EXCHAGEING_SUCCESS',payload:response.data.data.exchanges});
        } catch (error) {
            console.log(error);
            dispatch({type:'GETING_EXCHAGEING_FAIL'})
        }
    }
}