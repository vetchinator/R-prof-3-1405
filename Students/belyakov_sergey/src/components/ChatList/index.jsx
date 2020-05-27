import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

import connect from 'react-redux/es/connect/connect'

import {addRoom} from '../../store/actions/room-actions'

import './style.css'

import AddIcon from '@material-ui/icons/Add'
import {Button, List, ListItem, ListSubheader} from '@material-ui/core';


class ChatList extends Component {
  static propTypes = {
    showChatList: PropTypes.func.isRequired,
    rooms: PropTypes.object.isRequired,
    addRoom: PropTypes.func.isRequired,
    roomId: PropTypes.number
  }

  static defaultProps = {
    rooms: {},
    roomId: 1
  }

  addNewRoom() {
    const {rooms, addRoom} = this.props
    const roomId = Object.keys(rooms).length + 1
    addRoom(`Чат ${roomId}`)
  }

  render() {
    const {roomId, rooms, showChatList} = this.props

    const roomsArr = []

    Object.keys(rooms).forEach((key) => {
      roomsArr.push({
        roomId: Number(key),
        title: rooms[key].title
      })
    })

    return (
      <div className="chat-list">
        <div className="chat-list-rooms">
          <List>
            <ListSubheader component="div" className="subheader">Комнаты:</ListSubheader>
            {roomsArr.map(room => (
              <Link to={`/chat/${room.roomId}`} key={room.roomId}>
                <ListItem onClick={showChatList} selected={roomId === room.roomId}>{room.title}</ListItem>
              </Link>
            ))}
          </List>
        </div>
        <div className="chat-list-btn">
          <Button color="primary" onClick={() => this.addNewRoom()}>
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
