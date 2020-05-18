import React from 'react'
import shortid from 'shortid'

import Button from './Button/index.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           messages: ['Все', 'у', 'нас']
    }
    }

    addText = () => {
       const changedMessages = this.state.messages
       changedMessages.push('нормально!')
       this.setState({
           messages: changedMessages
       })
    }

    render() {
        const messages = this.state.messages.map(name => {
            return(
            <p className = "message" key = {shortid.generate()}>{name}</p>
            )
        });
        return (
        <div>
            <Button addText = {this.addText} />
            {messages}
        </div>
        )
    }
}

export default App;