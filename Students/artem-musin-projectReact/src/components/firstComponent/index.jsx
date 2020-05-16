import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './style.css'

import Message from './Message.jsx';
import MessageAnswer from './MessageAnswer.jsx'

// Код ниже просто добавляет элемент в массив и рендерит диалог 

// let testProps = () => {
//     // let { whosaid } = props;
//     // let { whoanswer } = props;

//     

//     function putMessage(){
        
//         arr.push('One More');
//         console.log(arr);
 
//     }

//     let testMap = arr.map(name => {
//         return (
//                 // <div>
//                 //     <h2>
//                 //         <span><i>{ whoanswer }: </i></span>
//                 //             Who said im low?
//                 //     </h2>
//                 //     <h2>
//                 //         <span> <i>{ whosaid }: </i> </span>
//                 //         Thats im said
//                 //     </h2>
//                 // </div>

//         <Message name={ name }/>

//         )
//     })

//     return (
//         <div>
//             <button onClick={putMessage}>
//                 hello everobody, new name
//                 </button>
//             {testMap}
//         </div>
//     )

    
// }

// export default testProps

// Этот код делает всё красиво


export default class FirstComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divCount: 0,
            message: null,
            showMessage: false,
            props: ['Me', 'My left hand', 'My right hand']
        }
    }
    
    putMessage = () => {
        this.setState({
            showMessage: true,
            message: <MessageAnswer />
        })
    }

    // componentDidUpdate(){
    //     this.setState({ 
    //         showMessage: false 
    //     })
    // }

    putAnswer = () => {
        this.state.props.push('Whatever');
        console.log(this.state.props);
        this.setState(({ divCount }) => ({
            divCount: divCount + 1
        } ))
    }


    render() {
            return (
                <div>
                    <button id="button" onClick={this.putMessage}>
                    click me to add message</button>
                <button id="button" onClick={this.putAnswer}>
                        click me to add answer
                    </button>
                    <p id="main">Messenger</p>
                    <div id="dialog">
                        {this.state.message}
                        {[...Array(this.state.divCount)].map(() => <Message name={ this.state.props[0] } />)}
                    </div>
            </div>
            )
    }
}




    