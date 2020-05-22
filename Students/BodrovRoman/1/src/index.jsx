import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import './layout/style/main.css'

const container = document.getElementById('app')

const fathers = ['Dart Vader', 'Chewbakka', 'Master Yoda']

class SpaceChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], cnt: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <h3>SpaceChat</h3>
                <Chat items={this.state.items} />
                <button onClick={this.handleClick}>Говори</button>
            </div>
        );
    }

    handleClick() {
        if (this.state.cnt >= fathers.length) {
            return;
        }
        let tmptxt = fathers[this.state.cnt]
        //console.log('отладка', tmptxt, this.state.cnt)
        const newItem = {
            text: tmptxt,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem)
        }));
        this.setState({ cnt: this.state.cnt + 1 })
        //console.log('---', 'отладка') 
    }
}

class Chat extends React.Component {
    render() {
        return (
            <div className="hello">
                {this.props.items.map(item => (
                    <React.Fragment key={item.id}>
                    <h4><i>{ item.text } says: </i>I'm your father!</h4><span></span>
                    <h4><i>Luke: </i>NOOOOOO!</h4>
                    </React.Fragment>
                ))}
            </div>
        );
    }
}

ReactDOM.render(
    <SpaceChat />,
    container
);