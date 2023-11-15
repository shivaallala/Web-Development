import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'shiva'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(prop, state) {
        console.log('LifecyclA getDerivedeStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }


  render() {
    console.log('LifeCycleA render')
    return (
        <div>
            <div>LifeCycleA</div>
            <LifeCycleB />
        </div>

    )
  }
}

export default LifeCycleA