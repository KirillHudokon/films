import axios from 'axios'
const url = "http://localhost:5000/films"
export class FilmsApi {
    get(){
        return axios.get(url)
    }
    post(film){
        return axios.post(url, film)
    }
    delete(id){
        return axios.delete(`${url}/${id}`)
    }
}

export class FilmsActionsApi {
    sort(type){
        return axios.post(`${url}/sort/${type}`)
    }
}