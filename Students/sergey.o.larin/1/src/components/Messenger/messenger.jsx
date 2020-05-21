import React from 'react';
import ReactDom from 'react-dom';
import {IconButton, TextField, Typography} from '@material-ui/core';
import {Send, Cancel} from '@material-ui/icons';

import './style.css';


class Messenger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: [],
            inputValue: '',
            count: 0,       // TODO delete Из массива
        }
        this.sendMessage = this.sendMessage.bind(this);
    }

    msg = ['Privet', 'Hello', 'MIR', 'World'];      // TODO delete Из массива

    inputText(value) {
        this.setState({inputValue: value})
    }

    sendMessage(message) {
        console.log(message)

        /*if (this.state.count === this.msg.length) {       // TODO delete Из массива
            i = 0;
            this.state.count = 0
        }
        const newArrMsg = this.state.message;
        newArrMsg.push(this.msg[i]);        // Добавляем в массив новое сообщение
        this.setState({
            message: newArrMsg,
            count: this.state.count + 1
        });
        */

        const newArrMsg = this.state.message;
        newArrMsg.push(message);      // Добавляем в массив новое сообщение
        this.setState({
            message: newArrMsg,
            inputValue: '',
        });
        document.getElementById('input-message').value = '';
        console.log(this.state.message.join())
    }

    clearText() {       // Очищаем страничку с сообщениями
        document.getElementById('input-message').value = '';
        this.setState({
            message: [],
            inputValue: '',
        })
    }

    render() {
        console.log(`msg ${this.state.message.join()}`);
        console.log(`input ${this.state.inputValue}`);
        return (
            <div>
                <div>
                    {this.state.message.map((item, i) =>
                        <Typography key={i}>
                            {item}
                        </Typography>
                    )}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        margin: "5px 0 0 0"
                    }}
                >
                    <TextField
                        id="input-message"
                        variant="outlined"
                        label="Введите сообщение"
                        size="small"
                        onChange={(event) => this.inputText(event.target.value)}
                    />
                    <IconButton onClick={() => this.clearText()}>
                        <Cancel color="primary"/>
                    </IconButton>
                    {/*<IconButton onClick={() => this.sendMessage(this.state.count)}>  TODO delete Из массива*/}
                    <IconButton id="sendButton"
                        disabled={!this.state.inputValue}
                        onClick={() => this.sendMessage(this.state.inputValue)}>
                        <Send color="primary"/>
                    </IconButton>
                </div>
            </div>
        )
    }
}

export default Messenger