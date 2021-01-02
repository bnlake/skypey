import React from 'react';

import './Chats.css';

const MessageComponent = ({ text, is_user_msg }, key) => {
	return (
		<div key={key} className={`Message ${is_user_msg ? 'usermessage' : ''}`}>
			{text}
		</div>
	);
};

class Chats extends React.Component {
	constructor(props) {
		super(props);
		this.chatsRef = React.createRef();
	}

	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	scrollToBottom = () => {
		this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
	};

	render() {
		return (
			<div className='Messages' ref={this.chatsRef}>
				{this.props.messages.map((message, index) => {
					return MessageComponent(message, index);
				})}
			</div>
		);
	}
}

export default Chats;
