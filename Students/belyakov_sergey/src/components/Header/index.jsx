import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'

import './style.css'

import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import AccountBoxIcon from '@material-ui/icons/AccountBox'

export default class Header extends Component {
  static propTypes = {
    roomId: PropTypes.number,
    showChatList: PropTypes.func.isRequired
  }

  static defaultProps = {
    roomId: 1
  }

  render() {
    const {roomId, showChatList} = this.props

    return (
      <div className="header">
        <div className="menu-icon">
          <div onClick={showChatList} className="menu-icon__open">
            <MenuIcon/>
          </div>
          <div onClick={showChatList} className="menu-icon__close hidden">
            <MenuOpenIcon/>
          </div>
        </div>
        <div className="header-bg">
          <h1>Chat-App</h1>
          <h2>@Чат {roomId}</h2>
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