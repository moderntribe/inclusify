import axios from 'axios';

const BASE_URL = 'https://europe-west1-degenderify.cloudfunctions.net'

async function inclusify(text = '', pron='they') {
    return axios.get('/degenderify', {
        text,
        pron
    })
}

export const api = {
    inclusify
}