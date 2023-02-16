import User from "./User"

export interface Props {
    name: string
    description: string
    photo: string
}

export interface AsideProps {
    link1: string
    link2?: string
    link3?: string
    logged: boolean
    user: User
}