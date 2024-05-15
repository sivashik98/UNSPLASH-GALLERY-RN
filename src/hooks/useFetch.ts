import {ACCESS_KEY, API_URL} from "../constants";

export default (path, options = {}) => async () => {
    // options.headers["Authorization"] =  `Client-ID ${ACCESS_KEY}`;
    return fetch(`${API_URL}${path}`, options).then((response) => response.json())
}
