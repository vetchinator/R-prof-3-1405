import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import './style.css';

export default class Profile extends React.Component {
    render () {
        return (
            <div className="profile__wrapper">
                <img className="profile__ava" src="https://via.placeholder.com/128" alt="..."/>
                <div className="profile__body">
                    <h2 className="profile__name">Me</h2>
                    <p className="profile__about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum obcaecati minima aliquid quasi! Consequuntur vero tenetur recusandae libero provident et</p>
                </div>
            </div>
        )
    }
}