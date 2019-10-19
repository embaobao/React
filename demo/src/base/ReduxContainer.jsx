import React, { Component } from 'react'
import connect from './connect'


@connect
class ReduxContainer extends Component {
    render() {
        return (
            <div>
                hahha
            </div>
        )
    }
    componentDidMount(){
        // console.log(this.props);
    }
}

export default ReduxContainer