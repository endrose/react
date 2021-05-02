import axios from 'axios'
import React, { Component } from 'react'

// style
import './DetailPost.css'

class DetailPost extends Component{
    state = ({
        post: {
            title: '',
            body: ''
        }
    })

    componentDidMount() {
        let postId = this.props.match.params.postId

        axios.get(` http://localhost:3000/posts/${postId}`)
            .then((res) => {
                console.log(res)
                let post = res.data
                this.setState({
                    post: {
                        title: post.title,
                        body: post.body
                    }
                })
            }).catch((err)=> console.log(err.message))
    }
    
    render() {
        return (
            <>
                <p>Detail Post</p>
                <hr />
               <div className="p-detail-post">
                    {/* <div className="img-thumb">
                        <img src="https://placeimg.com/200/150/tech" alt="img-post"/>
                    </div> */}
                            <div className="content">
                        <p className="detail-title">{ this.state.post.title }</p>
                        <p className="detail-desc">{ this.state.post.body}</p>
                          
                    </div>
                </div>
            </>
        )
    }
}


export default DetailPost;