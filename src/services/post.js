import axios from "axios"
import {OnlinePath, RootPath} from './config'

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${root ? OnlinePath : RootPath}/${path}`, data)
            .then((result) => {
             resolve(result)
            }, (err) => {
                reject(err)
        })
    })

    return promise;
}


export default Post;