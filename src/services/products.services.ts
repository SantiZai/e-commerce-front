import axios from 'axios'
import Product from '../interfaces/Product'
import { API } from './API'

const api = `${API}/products`

export const loadProducts = async (): Promise<Product[]> => {
    const res = await axios.get<Product[]>(api)
    return res.data
}