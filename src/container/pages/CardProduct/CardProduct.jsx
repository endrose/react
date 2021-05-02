import React, { Component } from 'react'
import Counter from './Counter'



class CardProduct extends Component{

    state = {
        order: 1
    }

   

    handlePlus = () => {
        this.setState({
            order : this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })

    }

    handleMinus = () => {
        if (this.state.order > 0 ) {
            this.setState({
                    order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
       
    }

    counterChange = (value) => {
        this.props.onCounterChange(value)
    }

    render() {
        return (
               <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/sayur/Lodeh.jpg" alt="product_image"/>
                </div>
                <p className="product-title">Daging ayam bumbu saus padang</p>
                <p className="product-price">Rp 34.000</p>
                <Counter onCounterChange={ (value)=> this.counterChange(value)} />
                </div>
            )
    }
}




export default CardProduct;