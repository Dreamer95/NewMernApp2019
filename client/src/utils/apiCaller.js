import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi (endpoint, method = 'GET', body){
    return axios({
        method : method,
       // url : `${Config.API_URL}/${endpoint}`, // cu phap es6 - neu ko them proxy thi dung nhu nay
        url : `/${endpoint}`, // neu them proxy o package.json thi co the dung nhu nay
        data : body
    }).catch(err=>{
        console.log(err);
    })
}