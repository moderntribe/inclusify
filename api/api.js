/* eslint-disable camelcase */
import axios from 'axios';
const BASE_URL = 'https://europe-west1-degenderify.cloudfunctions.net'

async function degender(text = '', pron='they') {
    return axios.get('/degenderify', {
        text,
        pron
    })
}

async function derace(text = '') {
    return axios.get('/deracify', {
        text
    })
}

export const api = {
    degender
}