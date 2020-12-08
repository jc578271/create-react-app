// import axios from 'axios'
export const auth = () => {
    
    // const request = axios('/').then(response => response.data)
    const request = async () => {
        return { isAuth: true }
    }

    return {
        type: "auth_user",
        payload: request()
    }
}