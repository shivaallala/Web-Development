import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'shiva'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(prop, state) {
        console.log('LifecycleB getDerivedeStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }


    render() {
        console.log('LifeCycleB render')
        return <div>LifeCycleB</div>
    }
}

export default LifeCycleB