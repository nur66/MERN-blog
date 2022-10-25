import Axios from "axios";


export const setDataBlog = () => {
    return (dispatch) => {
        Axios.get('http://localhost:5000/v1/blog/posts?page=1&perPage=5')
        .then(result => {
            const responApi = result.data;

            dispatch({type: 'UPDATE_DATA_BLOG', payload: responApi.data});
        })
        .catch(error => {
            console.log(error);
        })
    }
}