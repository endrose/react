import React, { Component } from "react"
import { GlobalConsumer } from "../../../context/context"
import './LiveCycleComp.css'



// redux
// import { connect} from 'react-redux'

class LiveCycleComp extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count : 1
        }

        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null
        
    }

    componentDidMount() {
        console.log('componentDidMount')
       
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate')
        // console.log('nextProps: ',nextProps)
        console.log('nextState: ', nextState)
        console.log('this state', this.state)
        console.groupEnd()

        if (nextState.count >= 4) {
           return
       }

        return true
        
    }

    getSnapshotBeforeUpdate(beforeProps, beforeState) {
        console.log('getSnapshotBeforeUpdate')
        return null

        
    }

    componentDidUpdate(prevProps,prevState,snapShot) {
        console.log('componentDidUpdate')
        
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

   
    
    render() {
        return (
                <>
                    <p>Halaman LiveCycle Component</p>
                    <button className="btn" onClick={this.changeCount}  >Component Button {this.state.count} </button>
                    <hr />
                <p>Total Order : { this.props.state.totalOrder}</p>
                </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order : state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(LiveCycleComp);
export default GlobalConsumer(LiveCycleComp);
