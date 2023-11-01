import React, { Component } from 'react';   

class Message extends Component {

    constructor() {
        super()
        this.state = {
            Message: 'Welcome visitor',
            Greeting : 'Hello'
        }
    }

    changeMessage() {
        this.setState({
            Message: 'Thank you for subscribing',
            Greeting : 'Bye'
        })
    }

    clickHandler() {
        console.log('Button clicked')
    }


    render() {
        return (
            <div>
                <h1>{this.state.Message} {this.state.Greeting} </h1>
                <button onClick = {() => {this.changeMessage(); this.clickHandler()}}>Subscribe</button> 
            </div>
        )
    }
}

export default Message
