import axios from 'axios'

export const getCryptoNews = (q) => {
    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {q: q, safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day', count:16},
        headers: {
          'x-bingapis-sdk': 'true',
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
          'x-rapidapi-key': '05c2352abcmsh681516dbedac55ap1de731jsnaaa5eacd6f75'
        }
      };
    return async (dispatch) => {
        dispatch({type: 'REQUESTING'})
        try {
            const response = await axios.request(options)
            dispatch({type: "GETNEWS_SUCCESS" , payload:response.data.value})
        } catch (error) {
            console.log(error);
            dispatch({type:'GETNEWS_FAIL'})
        }
    }
}