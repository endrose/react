import React, { Component } from "react";
import "./BlogPost.css";


import Post from '../../../components/Post/Post'
// import axios from "axios";
import API from "../../../services";

class BlogPost extends Component {

    state = {
        post: [],
        comments: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userid: 1
       },
        isUpdate: false,
    }

    handleUpdate = (data) => {
        // console.log(data, this.state)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleRemove = (data) => {
      
        API.deletePostBlog(this.state.formBlogPost,data)
            .then((res) => {
                this.getPostData()
                alert("Post berhasil dihapus!")
        })
        // axios.delete(`http://localhost:3000/posts/${data}`)
        //     .then(() => {
        //         this.getPostData()
        //     }).catch((err) => console.log(err.message))
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
       
        API.getBlogPost().then((res) => {
            this.setState({
                post: res
            })
        })


        API.getComments().then((res) => {
            this.setState({
                comments: res
            })
        })

        // axios.get("http://localhost:3000/posts?_sort=id&_order=desc")
        //     .then((res) => {
        //         // console.log(res)
        //         this.setState({
        //        post: res.data
        //    })
        // })

  
       
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
        API.postNewBlog(this.state.formBlogPost)
            .then((res) => {
                this.getPostData();
                this.setState({
                    formBlogPost: {
                            userId: 1,
                            title: '',
                            body: '',
                            id: 1
                    }
                })
                this.clearForm()
                alert("Post berhasil ditambahkan !", res)
        })
      


        // axios.post("http://localhost:3000/posts", this.state.formBlogPost)
        //     .then((res) => {
        //         this.getPostData()
        //          this.setState({
        //             formBlogPost: {
        //                 userid: 1,
        //                 id: 1,
        //                 title: '',
        //                 body: ''
        //             },
        //             isUpdate: false
        //         })
        //         alert(res.statusText)
        //     }).catch((err)=> alert(err.message))
        
        
       
    }

    putDataToAPI = () => {

        API.putPostBlog(this.state.formBlogPost, this.state.formBlogPost.id)
            .then((res) => {
                this.getPostData();
                this.setState({
                    formBlogPost: {
                        userId: 1,
                        title: '',
                        body: '',
                        id: 1
                    }
                })
                this.clearForm()
                alert("Post berhasil di updated!", res)
        })

    //    axios.put(`http://localhost:3000/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
    //        console.log(res)
    //         this.getPostData()
    //         this.clearForm()

    //      }).catch((err)=> alert(err.message))


    //     console.log(this.state.formBlogPost)
    }


    changeForm = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timeStamps = new Date().getTime();
        formBlogPostNew[event.target.name] = event.target.value

        if (!this.state.isUpdate) {
            formBlogPostNew["id"] = timeStamps
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
                    {
                    this.state.comments.map(comment => {
                        return (
                            <p key={comment.id }>{comment.name} - {comment.email}</p>
                        )
                    })
               }    
            </>
        )
    }
}

export default BlogPost;