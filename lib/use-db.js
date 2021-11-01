import { BaseAPI } from './db/api'
export const baseApiClient = new BaseAPI({
    apiKey: process.env.API_KEY
})