import React from 'react';
import ReactDOM from 'react-dom';


class Welcome extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className='title'>Привет, я App! Как дела?</h1>
                <Comments/>
            </React.Fragment>
        );
    }
}


class Comments extends React.Component {

    state = {
        messages: ['Дела идут отлично!']
    }

    handlerMessages = (e) => {
        e.preventDefault();
        let arrMessages = this.state.messages;

        this.setState({messages: this.state.messages.concat('Дела идут еще лучше!')})
        // this.setState({messages: this.state.messages.push('Дела идут еще лучше!')})
        // Array.push - не идет, вероятно, из=за мутации исходного массива
        console.log(this.state);
    }

    render() {
        const messageTemplate = this.state.messages.map(function(item, index) { 
            return (
            <li>{item}</li>
            );
        })

        return (
            <div>
                <ul>
                    {messageTemplate}
                </ul>
                <button onClick={this.handlerMessages}>Ответить</button>
            </div>

        )
    }    
}


ReactDOM.render(
    <Welcome/>,
    document.getElementById('root')
);