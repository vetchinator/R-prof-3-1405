import React from 'react';
import ReactDom from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//redux
import { Provider } from 'react-redux';
import initStore from '../../store/store.js';


import MessagesField from '../MessageField/MessageField.jsx';
import Header from '../Header/Header.jsx';
import ChartList from '../ChatList/ChatList.jsx';
import Container from '@material-ui/core/Container';

let user = 'Me';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function Layout() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ChartList />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Provider store = { initStore() }>
            <div className="d-flex w-100 justify-content-center">
                <MessagesField user={ user } />
            </div>
          </Provider>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Layout;