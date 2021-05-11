import axios from "axios";
import { OnlinePath, RootPath } from './config'




const Get = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlinePath : RootPath}/${path}`)
            .then((result) => {
            resolve(result.data)
            }, (err) => {
                reject(err)
                alert(err)
        })
    })

    return promise
}


export default Get;
