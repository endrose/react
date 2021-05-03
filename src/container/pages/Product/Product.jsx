import React, { Component } from 'react'
import CardProduct from '../CardProduct/CardProduct'
// import CardProduct from '../CardProduct/CardProduct'
import './Product.css'



import { RootContext } from '../../Home/Home'



// React-redux
// import {connect} from 'react-redux'


class Product extends Component{

    // state = {
    //     order: 1
    // }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        return (
                             <>
                                <p>Ini halaman product</p>
                                <hr/>
                            <div className="header">
                                <div className="logo">
                                        <img src="https://etanee.id/homescreenNew/android-icon-192x192.png" alt="logo"/>
                                    </div>
                                    <div className="trolley">
                                        <img src="https://toppng.com/uploads/preview/shopping-cart-115309972353g1kktalus.png" alt="logo-trolley" />
                                        <div className="count">{ value.state.totalOrder}</div>
                                </div>
                                </div>
                                {/* menggunakan props */}
                                {/* <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} /> */
                                }
                                {/* sudah menggunakan redux */}
                                <CardProduct />
                            </>
                        )
                    }
                }
           
                
            </RootContext.Consumer>
                
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }
// export default connect(mapStateToProps)(Product);
export default Product;
