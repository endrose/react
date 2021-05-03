// libraries
import React, { Component ,createContext} from 'react'
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
export const RootContext = createContext();
const Provider = RootContext.Provider;





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
      state = {
            totalOrder: 5
        }
    

    dispatch = (action) => {
        if (action.type === 'PLUS_ORDER' ) {
            return this.setState({
                totalOrder: this.state.totalOrder + 1
            })
        }

        if (action.type === 'MINUS_ORDER') {
            let totalOrder = 0
            if (this.state.totalOrder > 0) {

                 return {
                        ...this.state,
                        totalOrder: totalOrder
                    }
                // return this.setState({
                //     totalOrder: this.state.totalOrder - 1 
                // }, () => {
                //     return {
                //         ...this.state,
                //         totalOrder: totalOrder
                //     }
                // })
            }

            return this.setState({
                totalOrder: this.state.totalOrder - 1
            })
            
        }
    }
    
    

    render() {
       
        
        return (
            <Router>
                <Provider value={
                    {
                        state: this.state,
                        dispatch :this.dispatch
                    }
                }>
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
                </Provider>
            </Router>
        ) 
    }
}

export default Home;

