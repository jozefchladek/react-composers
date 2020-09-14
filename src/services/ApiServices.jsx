import axios from 'axios';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
}

export function getComposers() {
    const options = {
        url: 'http://localhost:8888/composers-backend/api/composer',
        method: 'GET',
        headers
    }
    return axios(options)
}

export function getComposerDetail(id) {
    const options = {
        url: 'http://localhost:8888/composers-backend/api/composer/' + id,
        method: 'GET',
        headers
    }
    return axios(options)
}

export function createComposer(name, genre, born_year, death_year, description) {
    const options = {
        url: 'http://localhost:8888/composers-backend/api/composer/create',
        method: 'POST',
        params: {
            name, genre, born_year, death_year, description
        },
        headers
    }
    return axios(options)
}