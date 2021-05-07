import React, { createContext, Component } from 'react'
import ActionType from './ActionType';


const RootContext = createContext();
const Provider = RootContext.Provider;


const GlobalProvider = (Children) => {
    return (
        class Parent extends Component{
            // State
            state = {
                totalOrder: 5
            }

            //Dispatching
            dispatch = (action) => {
                if (action.type === ActionType.PLUS_ORDER) {
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }

                if (action.type === ActionType.MINUS_ORDER) {
                    if (this.state.totalOrder > 0) {
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                    }
                    
                }

               return this.state
                    
            }

            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    } >
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider


const Consumer = RootContext.Consumer;

export const GlobalConsumer = (Children) => {
    return (
        class Parent extends Component{
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}