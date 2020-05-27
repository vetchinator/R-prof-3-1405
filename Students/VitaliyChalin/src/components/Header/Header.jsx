import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        userName: PropTypes.string
    };
    static defaultProps = {
        chatId: 0
    };

    render() {

        let titleText = '';
        let titleLink = '';

        (this.props.chatId > 0) ?
            titleText = `@${ this.props.userName }` :
            titleText = `@Chat Rooms`;

        (this.props.chatId !== 0) ?
            titleLink = <Link to="/" className="header__link link__gohome">Go Home</Link> :
            titleLink = <Link to="/profile/" className="header__link link__profile">My Profile</Link>;

        return (
            <header className="header">
                <h1>{ titleText }</h1>
                { titleLink }
            </header>
        )
    }
}