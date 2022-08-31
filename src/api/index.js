import axios from 'axios';

//setup axios base url
const baseUrl = process.env.REACT_APP_API_BASE_URL || "https://ac.aws.citizennet.com/assets/qspreviews/"

axios.interceptors.response.use(undefined, (error) => {
    const errors = error?.response?.data;
    throw errors;
    /*
    handle errors like 404, 405, 403, and Networking issues
    */
});

//extract response payload
const responseData = (response) => response.data;

const requestHeaders = () => {

    let headers = {}
    headers['Accept'] = 'application/json';
    return {
        headers
    };
}

//http http_requests facade
const http_requests = {
    get: (protectedRoute, url) => axios.get(url, requestHeaders(protectedRoute)).then(responseData),
}

// logo endpoints
export const logoes = {
    list: () => http_requests.get(false, `${baseUrl}qs_interview_data.json`),
}