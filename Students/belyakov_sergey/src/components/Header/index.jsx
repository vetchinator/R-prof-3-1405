import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'

import './style.css'

import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import AccountBoxIcon from '@material-ui/icons/AccountBox'

export default class Header extends Component {
  static propTypes = {
    roomId: PropTypes.number
  }

  static defaultProps = {
    roomId: 1
  }

  showChatList() {
    const chatList = document.querySelector('.chat-list');
    const messageField = document.querySelector('.messages-field')
    const menuIconOpen = document.querySelector('.menu-icon__open')
    const menuIconClose = document.querySelector('.menu-icon__close')

    chatList.classList.toggle('show')
    messageField.classList.toggle('hidden')
    menuIconOpen.classList.toggle('hidden')
    menuIconClose.classList.toggle('hidden')
  }

  render() {

    return (
      <div className="header">
        <div className="menu-icon">
          <div onClick={this.showChatList} className="menu-icon__open">
            <MenuIcon/>
          </div>
          <div onClick={this.showChatList} className="menu-icon__close hidden">
            <MenuOpenIcon/>
          </div>
        </div>
        <div className="header-bg">
          <h1>Chat-App</h1>
          <h2>@Чат {this.props.roomId}</h2>
          <div className="user-link">
            <Link to='/profile/'>
              User
              <AccountBoxIcon/>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}