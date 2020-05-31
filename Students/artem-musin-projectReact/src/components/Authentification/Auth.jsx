import React from 'react';

import PropTypes from 'prop-types'

import { setName, setBio, setDate } from '../../store/actions/profile_actions.js'
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

import { Link } from 'react-router-dom';

import { Paper, Typography, Input, InputLabel, Grid, TextField } from '@material-ui/core';
import { RaisedButton } from 'material-ui';



class Auth extends React.Component {
    static propTypes = {
        user: PropTypes.string,
        bio: PropTypes.string,
        date: PropTypes.string,
        
    }

    static defaultProps = {
        user: '',
        bio: '',
        date: '',
        
    }

    // handleChange = (evt, field) => {
    //     if (evt.keyCode !== 13) {
    //       this.setState({ [field]: evt.target.value })
    //     }
    //   }

    handleInfo = (user, date, bio) => {
        user && this.props.setName(user);
        date && this.props.setDate(text);
        bio && this.props.setBio(text);
        console.log('Name: ' + this.props.user);
        console.log('Date: ' + this.props.date);
        console.log('Bio: ' + this.props.bio);
    }

    handleName = (user) => {
        return this.props.setName(user);
    }

    handleBio = (text) => {
        return this.props.setBio(text);
    }

    handleDate = (text) => {
        return this.props.setDate(text);
    }

    // setBio = (event) => {
    //     this.props.setBio(event.target.value);
    //     console.log(this.props.setBio(event.target.value))
    // }

    render() {
        return (
            <Paper>
                <Grid
                    container
                    direction="column">

                    <Grid 
                        item
                        xs> 
                            <Typography variant="h6">
                                Hello, new user!
                            </Typography>

                        </Grid>
                        
                        <Grid
                            container
                            item
                            direction="column">

                            <InputLabel htmlFor="component-helper">Your nickname</InputLabel>
                            <Input
                                fullWidth
                                aria-describedby="component-helper-text"
                                onChange={ (e) => { this.handleName(e.target.value) } }
                            />

                            <InputLabel htmlFor="component-helper">Your date of born</InputLabel>
                            <Input 
                                fullWidth
                                aria-describedby="component-helper-text"
                                onChange={ (e) => { this.handleDate(e.target.value) } }
                            />
                            
                            <TextField
                                label="Tell us about yourself"
                                fullWidth
                                onChange={ (e) => { this.handleBio(e.target.value) } }
                            />    

                            </Grid>
                        
                                <Grid
                                container
                                item
                                direction="row">
                                            <Link to='/profile/'>
                                                <RaisedButton
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={ () => this.handleInfo() }>
                                                    SUBMIT
                                                    </RaisedButton>
                                                </Link>

                                                    <Link to='/main'>
                                                        Go to the chat as anonymous
                                                        </Link>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Auth); 