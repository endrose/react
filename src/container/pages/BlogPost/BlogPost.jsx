import React, { Component } from "react";
import "./BlogPost.css";


import Post from '../../../components/Post/Post'
import axios from "axios";

class BlogPost extends Component {

    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userid: 1
       },
        isUpdate: false
    }

    handleUpdate = (data) => {
        console.log(data, this.state)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3000/posts/${data}`)
            .then(() => {
                this.getPostData()
            }).catch((err) => console.log(err.message))
    }

    handleDetail = (postId) => {
        this.props.history.push(`detail-post/${postId}`)
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            this.PostDataToAPI()
        }
    }

    getPostData = () => {
        axios.get("http://localhost:3000/posts?_sort=id&_order=desc")
            .then((res) => {
                // console.log(res)
                this.setState({
               post: res.data
           })
        })
    }


    clearForm = () => {
        this.setState({
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userid: 1
            },
            isUpdate: false
        })
    }

    PostDataToAPI = () => {
        axios.post("http://localhost:3000/posts", this.state.formBlogPost)
            .then((res) => {
                this.getPostData()
                 this.setState({
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userid: 1
                    },
                    isUpdate: false
                })
                alert(res.statusText)
            }).catch((err)=> alert(err.message))
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3000/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
            console.log(res)
            this.getPostData()
            this.clearForm()

        }).catch((err)=> alert(err.message))


        console.log(this.state.formBlogPost)
    }


    changeForm = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost }
        let timeStamp = new Date().getTime()
        formBlogPostNew[event.target.name] = event.target.value

        if (!this.state.isUpdate) {
             formBlogPostNew["id"] = timeStamp
        }
        this.setState({
            formBlogPost: formBlogPostNew
        })
        
    }


    componentDidMount() {
        this.getPostData()
    }
  
    
    
    render() {
        return (
            <>
                <p className="section-title">Blog Post</p>
                <hr/>
                     <div className="form-add-post">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" placeholder="add title" value={this.state.formBlogPost.title} onChange={this.changeForm}  />
                        <label htmlFor="body">Blog Content</label>
                        <textarea cols="30" rows="10" type="text" value={this.state.formBlogPost.body} name="body" onChange={this.changeForm} placeholder="add blog content"  />
                        <button className="btn-submit" onClick={this.handleSubmit} >Simpan</button>
                    </div>
                {
                    this.state.post.map((post) => {
                        return <Post key={post.id} data={post} update={this.handleUpdate} goDetail={this.handleDetail}  remove={ this.handleRemove } />
                        
                    })

                }
                   
            </>
        )
    }
}

export default BlogPost;