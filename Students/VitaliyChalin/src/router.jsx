import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';

export default class Router extends React.Component {

    render() {
                
        return(
            <Switch>
                <Route exact path = '/'
                    render={ (props) => <Layout chatId={ 0 } userName={ props.location.userName } /> }
                />
                <Route 
                    exact
                    path='/chat/:chatId/'
                    render={ (props) => <Layout
                                            chatId={ Number(props.match.params.chatId) }
                                            userName={ props.location.userName }
                                        />
                    }
                />
                <Route exact path = '/profile/'
                    render={ () => <Layout chatId={ 1000 } userName={ 'Me' } /> }
                />
            </Switch>
        )
    }
}
