import axios from "axios"

import {OnlinePath,RootPath} from './config'

const Put = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? OnlinePath : RootPath}/${path}`, data)
            .then((result) => {
            resolve(result)
            }, (err) => {
                reject(err)
                console.log(err)
        })
    })


    return promise
}

export default Put;