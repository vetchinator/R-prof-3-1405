import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'

import {addRoom} from '../../store/actions/room-actions'

import './style.css'

import AddIcon from '@material-ui/icons/Add'
import {Button, List, ListItem, ListSubheader} from '@material-ui/core';


class ChatList extends Component {
  static propTypes = {
    rooms: PropTypes.object.isRequired,
    addRoom: PropTypes.func.isRequired,
    roomId: PropTypes.number
  }

  static defaultProps = {
    roomId: 1
  }

  render() {
    const {roomId} = this.props

    return (
      <div className="chat-list">
        <div className="chat-list-rooms">
          <List>
            <ListSubheader component="div" className="subheader">Комнаты:</ListSubheader>
            <Link to='/chat/1'>
              <ListItem selected={roomId === 1}>Чат 1</ListItem>
            </Link>
            <Link to='/chat/2'>
              <ListItem selected={roomId === 2}>Чат 2</ListItem>
            </Link>
            <Link to='/chat/3'>
              <ListItem selected={roomId === 3}>Чат 3</ListItem>
            </Link>
            <Link to='/chat/4'>
              <ListItem selected={roomId === 4}>Чат 4</ListItem>
            </Link>
          </List>
        </div>
        <div className="chat-list-btn">
          <Button color="primary">
            <AddIcon/>
            Добавить комнату
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({roomReducer}) => ({
  rooms: roomReducer.rooms
})

const mapDispatchToProps = (dispatch) => bindActionCreators({addRoom}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
