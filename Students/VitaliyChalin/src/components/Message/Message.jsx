import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import grey400 from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import './style.css';

const iconButtonElement = (
    <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>
  );
  
const rightIconMenu = (
<IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
</IconMenu>
);

export default (props) => {

    let { sender, text } = props;

    sender ? sender = sender : sender = 'Bot';

    return (
        <ListItem
            className={sender ?
                'message__wrapper message__wrapper--'+sender :
                'message__wrapper message__wrapper--Bot'}
            leftAvatar={<Avatar src="https://via.placeholder.com/64" className="user__avatar" />}
            rightIconButton={ rightIconMenu }
            primaryText={ sender }
            secondaryText={
            <p>
                { text }
            </p>
            }
            secondaryTextLines={2}
            style={{
                border: "1px solid #bbc5dd",
                borderRadius: "10px",
                marginBottom: "15px"
            }}
        />
    )
};