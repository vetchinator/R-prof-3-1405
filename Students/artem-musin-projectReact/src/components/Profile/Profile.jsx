import React from 'react';
import { Grid, Typography, Paper, Divider, Box } from '@material-ui/core';
import { RaisedButton } from 'material-ui';

import PropTypes from 'prop-types';

import { setName, setBio, setDate } from '../../store/actions/profile_actions.js'
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';



import './style.css'

const paperStyle = {
    paddingTop: '2em',
    margin: 'auto',
    maxWidth: '55em',
    backgroundColor: '#e4ccff'
}

const profileInfoHeader = {
     borderRadius: '1.5em',
     color: 'whitesmoke',
     backgroundColor: ' #9999ff'
}

const mainProfileInfo = {
    paddingLeft: '2em'
}

const ulStyle = {
    listStyleType: 'none'
}

class Profile extends React.Component {

    static propTypes = {
        user: PropTypes.string,
        date: PropTypes.string,
        bio: PropTypes.string
    }

    static defaultProps = {
        user: 'Artem',
        date: '21/01/1998',
        bio: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    }

    handleInfo = () => {
        console.log(this.props.user);
        console.log(this.props.date);
        console.log(this.props.bio);
    }

    render() {

    
        return (
            <Paper
                style={paperStyle}>

                <Grid
                    container
                    component="div"
                    spacing={4}>
                    <Grid
                        container
                        item
                        component="div"
                        xs={4}
                        spacing={4}
                        direction="column"
                        style={mainProfileInfo}
                        >
                            <Grid item>
                                <img src="https://sun7-9.userapi.com/1xjiM1HHTgBf8dfR7oBNpU1puXu3irG0LvgelA/NgMNbLU65iw.jpg" alt="Profile Photo"/>
                            </Grid>
                            <Grid 
                                container
                                item
                                component="div"
                                direction="column">
                                    <Divider />
                                    <Typography variant="subtitle1">
                                        Name: { this.props.user }
                                    </Typography>
                                    <Divider />
                                    <Typography variant="subtitle1">
                                        City: Saratov
                                    </Typography>
                                    <Divider />
                                    <Typography variant="subtitle1">
                                        Date of born: { this.props.date }
                                    </Typography>
                                    <Divider />
                            </Grid>
                    </Grid>
                        <Grid
                            container
                            item
                            component="div"
                            xs={8}
                            spacing={5}
                            direction="column">
                                <Grid item component="div">
                                    <Typography variant="h6" align="center"
                                    style={profileInfoHeader}>
                                        About me
                                    </Typography>
                                        <Box component="div">
                                            <Typography variant="body1">
                                                { this.props.bio }
                                            </Typography>
                                        </Box>
                                </Grid>
                                <Grid item component="div">
                                    <Typography variant="h6" align="center"
                                    style={profileInfoHeader}>
                                        Interests
                                    </Typography>
                                        <Box component="div">
                                            <Typography variant="body1">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nostrum illum cumque tempora nihil, minima ratione fuga quod dicta deserunt?
                                            </Typography>
                                        </Box>
                                </Grid>
                                <Grid item component="div">
                                    <Typography variant="h6" align="center"
                                    style={profileInfoHeader}>
                                        Skills
                                    </Typography>
                                        <Box component="ul"
                                        style={ulStyle}>
                                        
                                        </Box>
                                </Grid>
                        </Grid>

                </Grid>
            </Paper>
        )

    }
}

const mapStateToProps = ({ prflReducer }) => ({
    user: prflReducer.user,
    date: prflReducer.date,
    bio: prflReducer.bio
  });  

  const mapDispatchToProps = dispatch => bindActionCreators({ setName, setBio, setDate }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile); 
