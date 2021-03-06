const axios = require('axios')

export const productsAPI = {
    getProducts() {
        return axios.get('http://localhost:3004/data')
    }
}

