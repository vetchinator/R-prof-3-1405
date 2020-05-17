import React from "react";
import ReactDOM from "react-dom";

class MessagesList extends React.Component {
	render() {
	  return (
		<div>
		  {this.props.items.map(item => (
			<div>{item.text}</div>
		  ))}
		</div>
	  );
	}
  }

  export default MessagesList;