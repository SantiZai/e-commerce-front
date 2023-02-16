export default interface User {
    username: string
    password: string
    compras?: { idProduct: number, nameProduct: string, priceProduct: number }
}