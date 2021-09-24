import axios from 'axios'
export const getCryptoDetails = (id) => {
    return async (dispatch) => {
        dispatch({type: 'TRYING'})
        
        try {
            const options = {
                method: 'GET',
                url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
                headers: {
                  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                  'x-rapidapi-key': '05c2352abcmsh681516dbedac55ap1de731jsnaaa5eacd6f75'
                }
              };
            const response = await axios.request(options)
            dispatch({type:'GETDETAILS_SUCCESS',payload:response.data.data.coin});
        } catch (error) {
            console.log(error);
            dispatch({type:'GETDETIALS_FAIL'})
        }
    }
}