import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';
import MessageField from './components/MessageField/MessageField.jsx';


let user = 'Loontik'

let container = document.getElementById('app');
ReactDom.render(
<div className ="d-flex w-100 justify-content-center">
<MessageField user={user}/></div>, container)
// const messages = [
//     { name: "Ivan", content: "Hello, Petr!" },
//     { name: "Petr", content: "Hello, how are you?" },
    
// ];
// const Message = ({name, content}) => {
//     return <li><strong>{name}:</strong> {content}</li>
// }

// const handleClick = () => {
//     messages.push({ name: "Ivan", content: "I'm well" })
//     ReactDom.render(<MessageList messages={messages}/>, container)
    
// };

// const MessageList = ({ messages }) => {  
    
//     return (
//         <div>
//             <ul>
//                 {messages.map((item, index) => <Message {...item} key={index} />)}
//             </ul>
//             <button onClick = {handleClick} >Press me</button>
//         </div>
//     );
// }




