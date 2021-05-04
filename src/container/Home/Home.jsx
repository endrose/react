// libraries
import React, { Component} from 'react'
import { BrowserRouter as Router, Link, Route, } from 'react-router-dom'
// Pages
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import LiveCycleComp from '../pages/LiveCycleComp/LiveCycleComp';
import Product from '../pages/Product/Product';
import YouTubeCompPage from '../pages/YoutubeComp/YoutubeComp';
// Styling
import './Home.css'
// Context
import GlobalProvider from '../../context/context'

class Home extends Component{
    
    // state = {
    //     showComponent : true
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //          this.setState({
    //         showComponent: false
    //     }) 
    //     }, 15000)
       
    // }
      
    

    render() {
       
        
        return (
            <Router>
                <>
                    <div className="container">
                            <div className="navigation">
                                <Link to="/"> Blog Post</Link>
                                <Link to="/product"> Product</Link>
                                <Link to="/livecycle"> Livecycle</Link>
                                <Link to="/youtube-component"> YouTube </Link>
                            </div>
                            {/* routing */}
                            <Route exact path="/" component={BlogPost} />
                            <Route path="/detail-post/:postId" component={DetailPost} />
                            <Route path="/product" component={Product} />
                            <Route path="/livecycle" component={LiveCycleComp} />
                            <Route path="/youtube-component" component={YouTubeCompPage}/>
                        </div>
                </>
                    
            </Router>
        ) 
    }
}

export default GlobalProvider(Home);

