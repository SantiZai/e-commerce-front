import axios from 'axios'
import User from '../interfaces/User'
import { API } from './API'

const api = `${API}/users`

export const loadUsers = async (): Promise<User[]> => {
    const res = await axios.get<User[]>(api)
    return res.data
}

export const createUser = async ({ username, password }: User): Promise<void> => {
    await axios.post<User>(api, {username, password})
}